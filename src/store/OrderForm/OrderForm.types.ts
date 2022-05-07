import { Product } from "../Products/Products.types"

export type OrderFormItem = Product & {
  quantity: number
}

export type OrderFormState = {
  readonly items: OrderFormItem[]
  readonly totalPrice: number
}
