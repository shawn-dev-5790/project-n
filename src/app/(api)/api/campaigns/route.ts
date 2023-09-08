import { NextRequest, NextResponse } from 'next/server'
import { IResCampaigns } from './schema'
import { createFakeGetCampaigns } from './factory'

export async function GET(req: NextRequest, res: NextResponse) {
  return NextResponse.json(createFakeGetCampaigns(100, req.nextUrl.searchParams))
}

export async function getCampaigns(): Promise<IResCampaigns> {
  const res = await fetch('/api/campaigns')
  const data: IResCampaigns = await res.json()
  return data
}
