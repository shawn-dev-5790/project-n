export interface IChannelEntity {
  id: string
  name: string
  on_creative_count: number
}

export default class ChannelEntity {
  private _data
  constructor(data: IChannelEntity) {
    this._data = data
  }
  public get id() {
    return this._data.id
  }
  public get name() {
    return this._data.name
  }
  public get onCreativeCount() {
    return this._data.on_creative_count
  }
}
