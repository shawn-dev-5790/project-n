import { sleep } from '@/utils';
import { NextResponse } from 'next/server';

export async function GET() {
    
    await sleep(3000)

    return NextResponse.redirect('http://localhost:3000/sign-in');
}