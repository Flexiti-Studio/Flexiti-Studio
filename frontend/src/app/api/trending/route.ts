import { dbConnect } from '@/lib/mongodb';
import { MemeAsset } from '@/models/MemeAsset';
import { success, failure } from '@/lib/response';

export async function GET() {
  try {
    await dbConnect();

    const items = await MemeAsset.find({
      visibility:   'public',
      reviewStatus: 'published',
      trending:     true,
    })
      .sort({ createdAt: -1 })
      .limit(8);

    return success({ items });
  } catch (error) {
    console.error('[trending GET]', error);
    return failure('Failed to load trending memes.');
  }
}
