import { dbConnect } from '@/lib/mongodb';
import { MemeAsset } from '@/models/MemeAsset';
import { failure, success } from '@/lib/response';
import { normalize, toPositiveInt } from '@/lib/filters';

export async function GET(req: Request) {
  try {
    await dbConnect();

    const { searchParams } = new URL(req.url);

    const q         = normalize(searchParams.get('q'));
    const category  = normalize(searchParams.get('category'));
    const sort      = normalize(searchParams.get('sort')) || 'newest';
    const page      = toPositiveInt(searchParams.get('page'), 1);
    const limit     = Math.min(toPositiveInt(searchParams.get('limit'), 24), 100);

    const query: Record<string, unknown> = {
      visibility:   'public',
      reviewStatus: 'published',
    };

    if (category && category !== 'all') {
      query.category = new RegExp(`^${category}$`, 'i');
    }

    if (q) {
      query.$or = [
        { title:    { $regex: q, $options: 'i' } },
        { category: { $regex: q, $options: 'i' } },
        { tags:     { $in: [new RegExp(q, 'i')] } },
      ];
    }

    let sortOption: Record<string, 1 | -1> = { createdAt: -1 };
    if (sort === 'downloads') sortOption = { downloads: -1 };
    if (sort === 'trending')  sortOption = { trending: -1, createdAt: -1 };

    const total = await MemeAsset.countDocuments(query);
    const items = await MemeAsset.find(query)
      .sort(sortOption)
      .skip((page - 1) * limit)
      .limit(limit);

    return success({
      items,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    console.error('[memes GET]', error);
    return failure('Failed to load memes.');
  }
}
