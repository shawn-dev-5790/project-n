import { NextRequest, NextResponse } from 'next/server'
import { IResCampaign } from './schema'
import { IBaseParamsWithNextRes } from '../../schema'
import { createFakeGetCampaign } from './factory'

export async function GET(req: NextRequest, res: IBaseParamsWithNextRes) {
  // const res = await fetch('https://dummyjson.com/users', { headers: { 'Content-Type': 'application/json' } })
  // const data = await res.json()
  return NextResponse.json(createFakeGetCampaign(res.params.campaign_id))
}

export async function getCampaign(id: string): Promise<IResCampaign> {
  const res = await fetch('/api/campaigns/' + id)
  const data: IResCampaign = await res.json()
  return data
}
