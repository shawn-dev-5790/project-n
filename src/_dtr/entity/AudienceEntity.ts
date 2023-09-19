export interface IAudienceEntity {
  id: string
  count: number
}
export default class AudienceEntity {
  private _data

  constructor(data: IAudienceEntity) {
    this._data = data
  }

  public get id() {
    return this._data.id
  }
  public get count() {
    return this._data.count
  }
}
