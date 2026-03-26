import { dbConnect } from '@/lib/mongodb';
import { MemeAsset } from '@/models/MemeAsset';
import { failure, success } from '@/lib/response';

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    await dbConnect();
    const { slug } = await params;

    const item = await MemeAsset.findOne({
      slug,
      visibility:   'public',
      reviewStatus: 'published',
    });

    if (!item) return failure('Meme not found.', 404);
    return success({ item });
  } catch (error) {
    console.error('[memes/slug GET]', error);
    return failure('Failed to load meme.');
  }
}
