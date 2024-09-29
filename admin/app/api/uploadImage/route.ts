import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import fs from 'node:fs/promises';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const newFile = [];

    const file = formData.getAll('file') as File[];

    for (let i = 0; i < file?.length; i++) {
      const arrayBuffer = await file[i].arrayBuffer();
      const buffer = new Uint8Array(arrayBuffer);
      await fs.writeFile(`./public/uploads/${file[i].name}`, buffer);
      newFile.push(`/uploads/${file[i].name}`);
    }

    revalidatePath('/');

    return NextResponse.json({ status: 'success', data: newFile });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ status: 'fail', error: e });
  }
}
