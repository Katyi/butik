import { NextRequest, NextResponse } from 'next/server';

import User from '@/lib/models/User';
import { connectToDB } from '@/lib/mongoDB';

export const GET = async (
  req: NextRequest,
  { params }: { params: { userId: string } }
) => {
  try {
    await connectToDB();

    const user = await User.findOne({ clerkId: params.userId });

    if (!user) {
      return new NextResponse(JSON.stringify({ message: 'User not found' }), {
        status: 404,
      });
    }

    return NextResponse.json(user, { status: 200 });
  } catch (err) {
    console.log('[userId_GET]', err);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
};
