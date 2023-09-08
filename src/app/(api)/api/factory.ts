import { getRandomBoolean, getRandomInt, getRandomString } from '@/utils'
import { IBasePagination, IBaseQuery, IBaseRes } from './schema'

export function createBaseRes(): IBaseRes<any> {
  const res = {
    code: getRandomString('', 600),
    message: getRandomString('message', 600),
    data: {},
  }
  return res
}

export function createBasePagination(): IBasePagination {
  const res = {
    current_page: getRandomInt(0, 100),
    per_page: getRandomInt(0, 100),
    total_page: getRandomInt(0, 100),
    total_items: getRandomInt(0, 100),
    has_next_page: getRandomBoolean(),
    has_prev_page: getRandomBoolean(),
  }
  return res
}

export function createBaseQuery(): IBaseQuery {
  const res = {
    search: getRandomString('search', 600),
    filter_by: getRandomString('filter_by', 600),
    sort_by: getRandomString('sort_by', 600),
    sort_order: getRandomString('sort_order', 600),
    current_page: getRandomInt(0, 100),
    per_page: getRandomInt(0, 100),
  }
  return res
}
