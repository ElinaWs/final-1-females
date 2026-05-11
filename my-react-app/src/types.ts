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