import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  return NextResponse.json({
    message: "Thank you! We received your request.",
    data: body,
  });
}
