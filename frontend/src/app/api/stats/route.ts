import { dbConnect } from '@/lib/mongodb';
import { MemeAsset } from '@/models/MemeAsset';
import { failure, success } from '@/lib/response';

export async function GET() {
  try {
    await dbConnect();

    const baseMatch = { visibility: 'public', reviewStatus: 'published' };

    const [totalVideos, trendingCount, agg] = await Promise.all([
      MemeAsset.countDocuments(baseMatch),
      MemeAsset.countDocuments({ ...baseMatch, trending: true }),
      MemeAsset.aggregate([
        { $match: baseMatch },
        { $group: { _id: null, totalDownloads: { $sum: '$downloads' } } },
      ]),
    ]);

    return success({
      stats: {
        totalVideos,
        trendingCount,
        totalDownloads: agg[0]?.totalDownloads ?? 0,
      },
    });
  } catch (error) {
    console.error('[stats GET]', error);
    return failure('Failed to load stats.');
  }
}
