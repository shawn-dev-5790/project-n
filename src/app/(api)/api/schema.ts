import { NextResponse } from 'next/server'

export interface IBaseParamsWithNextRes extends NextResponse {
  params: { campaign_id: string }
}

export interface IBaseRes<T> {
  code: string
  message: string
  data: T
}

export interface IBasePagination {
  current_page: number
  per_page: number
  total_page: number
  total_items: number
  has_next_page: boolean
  has_prev_page: boolean
}

export interface IBaseQuery {
  search: string
  filter_by: string
  sort_by: string
  sort_order: string
  current_page: number
  per_page: number
}
