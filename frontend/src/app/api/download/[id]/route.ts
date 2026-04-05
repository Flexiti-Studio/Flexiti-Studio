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

    // Fetch the actual file content to serve as a download
    const response = await fetch(item.publicUrl);
    if (!response.ok) {
      // Fallback to redirect if fetch fails
      return NextResponse.redirect(item.publicUrl, 302);
    }

    const contentType = response.headers.get('content-type') || item.mimeType;
    const extension = item.mimeType.split('/').pop() || 'mp4';
    const filename = `${item.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.${extension}`;

    // Return the stream with download headers
    return new NextResponse(response.body, {
      headers: {
        'Content-Type': contentType,
        'Content-Disposition': `attachment; filename="${filename}"`,
        'Cache-Control': 'no-cache',
      },
    });
  } catch (error) {
    console.error('[download GET]', error);
    return failure('Download failed.');
  }
}
