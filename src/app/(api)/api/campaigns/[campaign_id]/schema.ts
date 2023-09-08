import { Nullable } from '@/_core/interface'
import { IBaseRes } from '../../schema'

export interface IResCampaign
  extends IBaseRes<{
    campaign: {
      id: string
      name: string
      status: string
      audience: Nullable<{
        id: string
        count: number
      }>
      schedule: Nullable<{
        id: string
        is_repeat: boolean
        is_duplicate: boolean
        day: number[]
        time: string
        period: Nullable<{
          start_date: Nullable<string>
          end_date: Nullable<string>
        }>
      }>
      channel: Nullable<{
        id: string
        name: string
        on_creative_count: number
      }>
    }
  }> {}
