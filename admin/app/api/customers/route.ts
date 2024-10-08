import Customer from '@/lib/models/Customer';
import { connectToDB } from '@/lib/mongoDB';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
  try {
    await connectToDB();

    // const collections = await Collection.find().sort({ createdAt: 'desc' });
    const customers = await Customer.find().sort({ createdAt: 'desc' });

    return NextResponse.json(customers, { status: 200 });
  } catch (err) {
    console.log('[customers_GET]', err);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
};

export const dynamic = 'force-dynamic';
