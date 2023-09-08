import { createBasePagination, createBaseQuery, createBaseRes } from '../factory'
import { IResCampaigns } from './schema'
import { createFakeGetCampaign } from './[campaign_id]/factory'
import { IResCampaign } from './[campaign_id]/schema'

export function createFakeGetCampaigns(length: number, qs: URLSearchParams): IResCampaigns {
  let query = createBaseQuery()
  let campaigns = Array.from({ length }, (_, idx) => createFakeGetCampaign(String(idx)).data.campaign)
  let pagination = createBasePagination()
  let res = createBaseRes()

  query.search = qs.get('search') || ''
  query.filter_by = qs.get('filter_by') || ''
  query.sort_by = qs.get('sort_by') || 'id'
  query.sort_order = qs.get('sort_order') || 'asc'
  query.current_page = Number(qs.get('current_page')) || 1
  query.per_page = Number(qs.get('per_page')) || 10

  campaigns = campaigns.filter((campaign) => {
    return campaign.name.indexOf(query.search) > -1
  })
  campaigns = campaigns.filter((campaign) => {
    const [k, v] = query.filter_by.split(':')
    return campaign[k as keyof IResCampaign['data']['campaign']] === v
  })
  campaigns = campaigns.slice(query.current_page, query.per_page * query.current_page)
  campaigns.sort((a: any, b: any) => {
    const sort_by = query.sort_by
    const sort_order = query.sort_order
    if (sort_order === 'asc') return a[sort_by] - b[sort_by]
    return b[sort_by] - a[sort_by]
  })

  pagination.current_page = query.current_page
  pagination.per_page = query.per_page
  pagination.total_page = Math.ceil(campaigns.length / query.per_page)
  pagination.total_items = campaigns.length
  pagination.has_next_page = query.current_page < pagination.total_page
  pagination.has_prev_page = query.current_page > 2

  res.data = { query, pagination, campaigns }

  return res
}
