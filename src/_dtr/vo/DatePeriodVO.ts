import { Nullable } from '../type'

export interface IDatePeriodVO {
  start_date: Nullable<string>
  end_date: Nullable<string>
}

export default class DatePeriodVO {
  private _data

  constructor(data: IDatePeriodVO) {
    this._data = data
  }

  public get startDate() {
    return this._data.start_date
  }
  public get endDate() {
    return this._data.end_date
  }
}
