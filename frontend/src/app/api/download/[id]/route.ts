import { dbConnect } from '@/lib/mongodb';
import { MemeAsset } from '@/models/MemeAsset';
import { failure } from '@/lib/response';
import { NextResponse } from 'next/server';

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();
    const { id } = await params;

    const item = await MemeAsset.findById(id);
    if (!item) return failure('Meme not found.', 404);

    // Increment download counter without waiting
    MemeAsset.findByIdAndUpdate(id, { $inc: { downloads: 1 } }).exec();

    return NextResponse.redirect(item.publicUrl, 302);
  } catch (error) {
    console.error('[download GET]', error);
    return failure('Download failed.');
  }
}
