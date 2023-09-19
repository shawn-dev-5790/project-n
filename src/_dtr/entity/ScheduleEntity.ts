import { Nullable } from '../type'
import DatePeriodVO, { IDatePeriodVO } from '../vo/DatePeriodVO'

export interface IScheduleEntity {
  id: string
  is_repeat: boolean
  is_duplicate: boolean
  day: number[]
  time: string
  period: Nullable<IDatePeriodVO>
}

export default class ScheduleEntity {
  private _data

  constructor(data: any) {
    this._data = data
  }

  public get id() {
    return this._data.id
  }
  public get isRepeat() {
    return this._data.is_repeat
  }
  public get isDuplicate() {
    return this._data.is_duplicate
  }
  public get day() {
    return this._data.day
  }
  public get time() {
    return this._data.time
  }
  public get period() {
    return this._data.period ? new DatePeriodVO(this._data.period) : null
  }
}
