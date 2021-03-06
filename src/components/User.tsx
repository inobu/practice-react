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
  avatar: string
}

export interface Payload<T> {
  page: number;
  per_page: number;
  total: number;
  total_pages: number
  data: T[]
}

export interface Coating<T> {
  data: T
}