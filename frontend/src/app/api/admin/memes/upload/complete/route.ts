import { dbConnect } from '@/lib/mongodb';
import { MemeAsset } from '@/models/MemeAsset';
import { failure, success } from '@/lib/response';

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();
    const { 
      title, 
      originalFileName, 
      slug, 
      storageKey, 
      publicUrl, 
      mimeType, 
      sizeBytes, 
      thumbnailUrl 
    } = body;

    if (!title || !publicUrl || !storageKey) {
      return failure('Missing required metadata.', 400);
    }

    const doc = await MemeAsset.create({
      title,
      originalFileName: originalFileName || title,
      slug,
      storageKey,
      publicUrl,
      mimeType: mimeType || 'video/mp4',
      sizeBytes: sizeBytes || 0,
      thumbnailUrl: thumbnailUrl || '',
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

    return success({ message: 'Metadata saved.', item: doc });
  } catch (error) {
    console.error('[complete POST]', error);
    return failure('Failed to save metadata.');
  }
}
