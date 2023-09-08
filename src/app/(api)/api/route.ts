import { API_ROUTE } from '@/_core/constant'
import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json(API_ROUTE)
}
