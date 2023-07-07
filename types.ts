export interface Billboard {
    id: string,
    name: string,
    imgUrl: string
}

export interface Category {
    id: string,
    name:string,
    billboard: Billboard
}