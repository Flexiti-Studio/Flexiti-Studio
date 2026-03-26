import { dbConnect } from '@/lib/mongodb';
import { MemeAsset } from '@/models/MemeAsset';
import { failure, success } from '@/lib/response';

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();
    const { id } = await params;
    const item = await MemeAsset.findById(id);
    if (!item) return failure('Item not found.', 404);
    return success({ item });
  } catch (error) {
    console.error('[admin/memes/id GET]', error);
    return failure('Failed to fetch item.');
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();
    const { id } = await params;
    const body = await req.json();
    const item = await MemeAsset.findByIdAndUpdate(id, body, { new: true });
    if (!item) return failure('Item not found.', 404);
    return success({ item });
  } catch (error) {
    console.error('[admin/memes/id PATCH]', error);
    return failure('Failed to update item.');
  }
}

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();
    const { id } = await params;
    const item = await MemeAsset.findByIdAndDelete(id);
    if (!item) return failure('Item not found.', 404);
    return success({ message: 'Deleted successfully.' });
  } catch (error) {
    console.error('[admin/memes/id DELETE]', error);
    return failure('Failed to delete item.');
  }
}
