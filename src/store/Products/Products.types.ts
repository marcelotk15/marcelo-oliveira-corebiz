type InstallmentsEntity = {
  quantity: number
  value: number
}

export type Product = {
  productId: number
  productName: string
  stars: number
  imageUrl: string
  listPrice?: number | null
  price: number
  installments?: InstallmentsEntity[]
}

export type ProductsState = {
  readonly products: Product[]
  readonly isLoading: boolean
  readonly hasError: boolean
}