export interface IProduct {
  id: number
  url: string
  title: string
  title_ru: string
  image?: string
}

export interface IDetails {
  id: number
  attributes: [{ name: string; value: string }]
  description: string
  photos: [{ url: string; caption: any }]
  slug: string
  title: string
  title_ru: string
  ulr: string
  stockrecords: { num_in_stock: number; price: number; price_currency: string }
}

export interface IReview {
  id: number | string
  author_id: number | string
  rating: number
  text?: string
}
