import { dbConnect } from '@/lib/mongodb';
import { MemeAsset } from '@/models/MemeAsset';
import { success, failure } from '@/lib/response';

export async function GET() {
  try {
    await dbConnect();

    const items = await MemeAsset.find({
      visibility:   'public',
      reviewStatus: 'published',
    })
      .sort({ createdAt: -1 })
      .limit(12);

    return success({ items });
  } catch (error) {
    console.error('[recent GET]', error);
    return failure('Failed to load recent memes.');
  }
}
