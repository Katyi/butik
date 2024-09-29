import { NextRequest, NextResponse } from 'next/server';

import User from '@/lib/models/User';
import { connectToDB } from '@/lib/mongoDB';

export const POST = async (req: NextRequest) => {
  try {
    const reqBody = await req.json();
    const { userId } = reqBody;

    await connectToDB();

    let user = await User.findOne({ clerkId: userId });

    if (!user) {
      user = await User.create({ clerkId: userId });
      await user.save();
    }

    return NextResponse.json(user, { status: 200 });
  } catch (err) {
    console.log('[users_GET]', err);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
};
