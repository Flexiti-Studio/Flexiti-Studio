import { dbConnect } from '@/lib/mongodb';
import { MemeAsset } from '@/models/MemeAsset';
import { listR2Objects } from '@/lib/r2';
import { failure, success } from '@/lib/response';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    await dbConnect();

    // 1. List objects from R2 memes/ folder
    const r2Data = await listR2Objects('memes/');
    const r2Files = r2Data.Contents ?? [];

    // 2. Fetch all existing MemeAssets to compare
    const existingAssets = await MemeAsset.find({}, { storageKey: 1 }).lean();
    const existingKeys = new Set(existingAssets.map((a: any) => a.storageKey));

    // 3. Filter for files not in MongoDB
    // We ignore keys that are just the folder itself or empty
    const unsynced = r2Files
      .filter((file) => file.Key && !file.Key.endsWith('/') && !existingKeys.has(file.Key))
      .map((file) => ({
        key: file.Key,
        size: file.Size,
        lastModified: file.LastModified,
        publicUrl: `${process.env.R2_PUBLIC_BASE_URL}/${file.Key}`,
        filename: file.Key?.split('/').pop() || 'unknown',
      }));

    return success({ items: unsynced });
  } catch (error) {
    console.error('[sync GET]', error);
    return failure('Failed to fetch unsynced assets.');
  }
}
