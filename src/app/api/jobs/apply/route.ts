import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function POST(request: Request) {
  const data = await request.json();

  const result = await prisma.applicants.create({
    data,
  });

  await prisma.job.update({
    where: {
      id: data.jobId,
    },
    data: {
      applicants: {
        increment: 1,
      },
    },
  });

  return NextResponse.json(result);
}
