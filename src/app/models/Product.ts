export class Product {
    productID: number;
    productName: string;
    productDescription: string;
    cost:number;
}

export class ProductQuantity
{
    id:number;
    productID:number;
    productName:string;
    lot:string;
    dateCode:string;
    totalQuantity:string;
    expiredDate:Date;
    manufacturerDate:Date;
    stockInQuantity:number;
    shopInQuantity:number;
    soldOutQuantity:number;
    createdBy:string;
}