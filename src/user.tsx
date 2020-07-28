export interface User {
  id: string;
  first_name: string;
  last_name: string;
}

export interface UserDetail {
  id: number
  email: string
  first_name: string
  last_name: string
  avater: string
}

export interface Payload<T> {
  page: number;
  per_page: number;
  total: number;
  total_pages: 2
  data: T[]
}

export interface Coating<T> {
  data: T
}