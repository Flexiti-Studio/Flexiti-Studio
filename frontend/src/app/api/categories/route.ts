import { dbConnect } from '@/lib/mongodb';
import { MemeAsset } from '@/models/MemeAsset';
import { failure, success } from '@/lib/response';

export async function GET() {
  try {
    await dbConnect();

    const categories = await MemeAsset.aggregate([
      { $match: { visibility: 'public', reviewStatus: 'published' } },
      { $group: { _id: '$category', count: { $sum: 1 } } },
      { $project: { _id: 0, name: '$_id', count: 1 } },
      { $sort: { count: -1, name: 1 } },
    ]);

    return success({ categories });
  } catch (error) {
    console.error('[categories GET]', error);
    return failure('Failed to load categories.');
  }
}
