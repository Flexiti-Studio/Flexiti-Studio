import { dbConnect } from '@/lib/mongodb';
import { failure, success } from '@/lib/response';
import { MemeAsset } from '@/models/MemeAsset';
import { makeSlug } from '@/lib/slug';

type SaveItem = {
  id: string;
  title: string;
  category: string;
  tags: string[];
  description?: string;
  featured?: boolean;
  trending?: boolean;
  visibility?: 'public' | 'private';
};

export async function POST(req: Request) {
  try {
    await dbConnect();

    const body = await req.json();
    const { items } = body as { items: SaveItem[] };

    if (!items?.length) return failure('No items to save.', 400);

    const updated = [];

    for (const row of items) {
      const doc = await MemeAsset.findById(row.id);
      if (!doc) continue;

      doc.title        = row.title?.trim() || doc.title;
      doc.slug         = makeSlug(doc.title);
      doc.category     = row.category?.trim() || 'Uncategorized';
      doc.tags         = Array.isArray(row.tags) ? row.tags : [];
      doc.description  = row.description || '';
      doc.featured     = !!row.featured;
      doc.trending     = !!row.trending;
      doc.visibility   = row.visibility || 'public';
      doc.reviewStatus = 'published';

      await doc.save();
      updated.push(doc);
    }

    return success({ message: 'Items saved successfully.', items: updated });
  } catch (error) {
    console.error('[save]', error);
    return failure('Save failed.');
  }
}
