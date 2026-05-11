export interface ICosmeticShort {
    name: string
    description: string
    price: number
}

export interface ICosmeticList {
    [id: string]: ICosmeticShort
}

export interface ICosmetic extends ICosmeticShort {
    id: string
}

export interface IBasket {
  cosmetic: ICosmetic
  count: number
}

export interface IBasketState {
  items: IBasket[]
  totalPrice: number
  totalCount: number
}