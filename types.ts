export interface Billboard {
    id: string,
    label: string,
    imageUrl: string
}

export interface Category {
    id: string,
    name:string,
    billboard: Billboard
}