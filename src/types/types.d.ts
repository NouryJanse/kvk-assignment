declare module 'DateHelper'
declare module '*.woff'
declare module '*.woff2'

interface Company {
  id: number
  name: string
  city: string
  zipcode: number
  logo: string
  createdAt: string
  catchPhrase?: string
  website?: string
  phoneNumber?: string
  fetchComplete?: boolean
}

interface Error {
  error: string
}
