import { dbConnect } from '@/lib/mongodb';
import { MemeAsset } from '@/models/MemeAsset';
import { listR2Objects } from '@/lib/r2';
import { failure, success } from '@/lib/response';
import { _Object } from '@aws-sdk/client-s3';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    await dbConnect();

    // 1. List objects from R2 memes/ folder
    const r2Data = await listR2Objects('memes/');
    const r2Files: _Object[] = r2Data.Contents ?? [];

    // 2. Fetch all existing MemeAssets to compare
    const existingAssets = (await MemeAsset.find({}, { storageKey: 1 }).lean()) as unknown as { storageKey: string }[];
    
    const existingKeys = new Set<string>();
    for (const a of existingAssets) {
      if (a.storageKey) existingKeys.add(a.storageKey);
    }

    // 3. Filter for files not in MongoDB
    const unsynced = r2Files
      .filter((file: _Object): boolean => {
        const key = file.Key;
        if (!key) return false;
        return !key.endsWith('/') && !existingKeys.has(key);
      })
      .map((file: _Object) => {
        const key = file.Key || '';
        return {
          key,
          size: file.Size || 0,
          lastModified: file.LastModified || new Date(),
          publicUrl: `${process.env.R2_PUBLIC_BASE_URL}/${key}`,
          filename: key.split('/').pop() || 'unknown',
        };
      });

    return success({ items: unsynced });
  } catch (err: unknown) {
    console.error('[sync GET]', err);
    return failure('Failed to fetch unsynced assets.');
  }
}
