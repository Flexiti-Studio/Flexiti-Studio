import { NextResponse } from 'next/server';

export function success(data: Record<string, unknown>, status = 200) {
  return NextResponse.json({ ok: true, ...data }, { status });
}

export function failure(message: string, status = 500) {
  return NextResponse.json({ ok: false, message }, { status });
}
