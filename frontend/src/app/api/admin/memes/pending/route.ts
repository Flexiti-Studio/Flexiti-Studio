import { dbConnect } from '@/lib/mongodb';
import { MemeAsset } from '@/models/MemeAsset';
import { failure, success } from '@/lib/response';

export async function GET() {
  try {
    await dbConnect();

    const items = await MemeAsset.find({
      reviewStatus: { $in: ['uploaded', 'analyzing', 'analyzed', 'approved'] },
    }).sort({ createdAt: -1 });

    return success({ items });
  } catch (error) {
    console.error('[pending]', error);
    return failure('Failed to load pending memes.');
  }
}
