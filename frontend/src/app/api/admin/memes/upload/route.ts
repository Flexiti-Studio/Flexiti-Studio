import { dbConnect } from '@/lib/mongodb';
import { uploadBufferToR2 } from '@/lib/r2';
import { makeSlug } from '@/lib/slug';
import { failure, success } from '@/lib/response';
import { MemeAsset } from '@/models/MemeAsset';

export async function POST(req: Request) {
  try {
    await dbConnect();

    const formData = await req.formData();
    const files = formData.getAll('files') as File[];
    const thumbnails = formData.getAll('thumbnails') as File[];

    if (!files.length) {
      return failure('No files uploaded.', 400);
    }

    const results = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const thumbnailFile = thumbnails[i];

      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const rawTitle = file.name.replace(/\.[^/.]+$/, '');
      const slug = `${makeSlug(rawTitle)}-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
      const ext = file.name.split('.').pop() ?? 'mp4';
      const key = `memes/${slug}.${ext}`;

      const publicUrl = await uploadBufferToR2(buffer, key, file.type || 'video/mp4');

      let thumbnailUrl = '';
      if (thumbnailFile) {
        const thumbBytes = await thumbnailFile.arrayBuffer();
        if (thumbBytes.byteLength > 0) {
          const thumbBuffer = Buffer.from(thumbBytes);
          const thumbKey = `thumbnails/${slug}.jpg`;
          thumbnailUrl = await uploadBufferToR2(thumbBuffer, thumbKey, 'image/jpeg');
        }
      }

      const doc = await MemeAsset.create({
        title: rawTitle,
        originalFileName: file.name,
        slug,
        storageKey: key,
        publicUrl,
        mimeType: file.type || 'video/mp4',
        sizeBytes: file.size,
        thumbnailUrl,
        category: 'Uncategorized',
        tags: [],
        description: '',
        downloads: 0,
        featured: false,
        trending: false,
        visibility: 'private',
        reviewStatus: 'uploaded',
        aiSuggestion: { status: 'pending' },
      });

      results.push(doc);
    }

    return success({ message: 'Files uploaded successfully.', items: results });
  } catch (error) {
    console.error('[upload]', error);
    return failure('Upload failed.');
  }
}
