import { getPresignedUploadUrl } from '@/lib/r2';
import { makeSlug } from '@/lib/slug';
import { failure, success } from '@/lib/response';

export async function POST(req: Request) {
  try {
    const { filename, contentType, folder = 'memes' } = await req.json();

    if (!filename || !contentType) {
      return failure('Filename and contentType are required.', 400);
    }

    const rawTitle = filename.replace(/\.[^/.]+$/, '');
    const slug = `${makeSlug(rawTitle)}-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    const ext = filename.split('.').pop() ?? (folder === 'memes' ? 'mp4' : 'jpg');
    const key = `${folder}/${slug}.${ext}`;

    const uploadUrl = await getPresignedUploadUrl(key, contentType);
    const publicUrl = `${process.env.R2_PUBLIC_BASE_URL}/${key}`;

    return success({
      uploadUrl,
      publicUrl,
      key,
      slug,
      rawTitle,
    });
  } catch (error) {
    console.error('[presigned POST]', error);
    return failure('Failed to generate presigned URL.');
  }
}
