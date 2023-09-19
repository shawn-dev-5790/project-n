import { NextRequest, NextResponse } from 'next/server'
import { IResCampaigns } from './schema'
import { createFakeGetCampaigns } from './factory'

export async function GET(req: NextRequest, res: NextResponse): Promise<NextResponse<IResCampaigns>> {
  const dummyData = createFakeGetCampaigns(100, req.nextUrl.searchParams)
  return NextResponse.json(dummyData)
}

export async function getCampaigns(): Promise<IResCampaigns> {
  const res = await fetch('/api/campaigns')
  const data: IResCampaigns = await res.json()
  return data
}
