export interface IBaseNextComponent {
  children: React.ReactNode
}

export interface IBaseNextComponentError {
  error: Error
  reset: () => void
}

export type Nullable<T> = T | null
