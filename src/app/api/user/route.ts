import { hasPassword } from "@/lib/utils";
import prisma from "../../../../lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const hasedPassword = await hasPassword(body.password);

  const result = await prisma.user.create({
    data: {
      ...body,
      password: hasedPassword,
    },
  });
  return NextResponse.json(result);
}
