import { IBasePagination, IBaseQuery, IBaseRes } from '../schema'
import { IResCampaign } from './[campaign_id]/schema'

export interface IResCampaigns
  extends IBaseRes<{
    campaigns: Array<IResCampaign>
    pagination: IBasePagination
    query: IBaseQuery
  }> {}
