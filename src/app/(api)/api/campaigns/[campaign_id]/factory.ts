import { getRandomBoolean, getRandomDays, getRandomInt, getRandomPick, getRandomTime } from '@/utils'
import { IResCampaign } from './schema'
import { createBaseRes } from '../../factory'

export function createFakeGetCampaign(id: string): IResCampaign {
  const campaign = {
    id: 'campaign_id' + id,
    name: 'campaign_name' + id,
    status: getRandomPick<string>(['draft', 'ready', 'on', 'off', 'remove']),
    audience: {
      id: 'audience_id' + id,
      count: getRandomInt(1000, 14000),
    },
    schedule: {
      id: 'schedule_id' + id,
      is_repeat: getRandomBoolean(),
      is_duplicate: getRandomBoolean(),
      day: getRandomDays(),
      time: getRandomTime(),
      period: null, // { start_date: '', end_date: '' },
    },
    channel: {
      id: 'channel_id',
      name: getRandomPick<string>(['친구톡', '알림톡', '문자', '이메일']),
      on_creative_count: getRandomInt(2, 40),
    },
  }

  const res = createBaseRes()

  res.data.campaign = campaign

  return res
}
