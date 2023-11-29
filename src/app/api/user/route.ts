import { hasPassword } from "@/lib/utils";
import prisma from "../../../../lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const hasedPassword = await hasPassword(body.password);
  console.log(body);

  const result = await prisma.user.create({
    data: {
      // ...body,
      name: body.name,
      email: body.email,
      isAdmin: false,
      password: hasedPassword,
    },
  });
  return NextResponse.json(result);
}
