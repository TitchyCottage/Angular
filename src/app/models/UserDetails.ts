export class UserDetails {
      id:string;
      firstName: string;
      lastName: string;
      fullName:string;
      password: string;
      currentPassword: null;
      role: string;
      email: string;
      phoneNumber: string;
      shopName: string;
      addressLine1: string;
      addressLine2:string;
      latitude: number;
      longitude: number;
      pincode: number;
      city: string;
      state: string;
      isActive: boolean;
      type: number;
      createdBy: string;
      createdDate:Date;
      modifiedBy: string;
      modifiedDate: Date;
}

export class RoleDetails{
      id:number;
      value:string;

}