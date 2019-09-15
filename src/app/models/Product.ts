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

export class DistibutorDashboardRequestModel
{
    productName:number;
    lot:string;
    ExpiredDate:string;
    DistibutorId:string;
}

export class DistibutorDashboardResponseModel
{
    ShopName:string;
    ProductName:string;
    Lot:string;
    ManufacturerDate:Date;
    ExpiredDate:Date;
    TotalQuantity:number;
    StockInQuantity:number;
    SoldOutQuantity:number;
}
