import { Nullable } from '../type'
import AudienceEntity, { IAudienceEntity } from './AudienceEntity'
import ChannelEntity, { IChannelEntity } from './ChannelEntity'
import ScheduleEntity, { IScheduleEntity } from './ScheduleEntity'

export interface ICampaignEntity {
  id: string
  name: string
  status: string
  audience: Nullable<IAudienceEntity>
  channel: Nullable<IChannelEntity>
  schedule: Nullable<IScheduleEntity>
}

export default class CampaignEntity {
  private _data

  constructor(data: ICampaignEntity) {
    this._data = data
  }

  public get id() {
    return this._data.id
  }
  public get name() {
    return this._data.name
  }
  public get status() {
    return this._data.status
  }
  public get audience() {
    return this._data.audience ? new AudienceEntity(this._data.audience) : null
  }
  public get channel() {
    return this._data.channel ? new ChannelEntity(this._data.channel) : null
  }
  public get schedule() {
    return this._data.schedule ? new ScheduleEntity(this._data.schedule) : null
  }
}
