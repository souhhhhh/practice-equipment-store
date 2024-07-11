export interface IProduct { 
    id: string;
    name?: string
    imagePath?: string
    price: number
    count: number
    [key: string]: any
};
