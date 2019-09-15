export class ShopTransactionModel
{
    ID:number;
    ShopID:string;
    ProductID:number;
    ProductQuantityID:number;
    Quantity:number;
    CreatedBy:string
}

export class CheckOutRequestModel{
    shopID:string;
    productID:number;
    productQuantityID:number;
    quantity:number;
    isreturn:boolean;
    createdBy:string;
    createdDate:Date;
}