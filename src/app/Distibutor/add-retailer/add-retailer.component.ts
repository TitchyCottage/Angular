import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { userService } from '../../Service/user';
import {  UserDetails, RoleDetails} from '../../models/UserDetails';
import { first } from 'rxjs/operators';
import {SatateData} from '../../State-district'

@Component({
  selector: 'app-Add-retailer',
  templateUrl: './add-retailer.component.html',
  styleUrls: ['./add-retailer.component.css']
})
export class AddRetailerComponent implements OnInit {

  addDistibutorForm: FormGroup;
  loading = false;
  hasError = false;
  hasSuccess = false;
  submitted = false;
  hasEdit =false;
  returnUrl: string;
  error = '';
  success ='';
  hasPasswordMatch =false;
  stateDropDown: any[];
  districtDropDown:any[];
  roles:RoleDetails;

  constructor(private route: ActivatedRoute,private _user: userService, 
    private formBuilder: FormBuilder) { }

  ngOnInit() {
debugger;
    this.stateDropDown =SatateData.states;
    debugger;
    this.route.paramMap.subscribe(params => {
      debugger;
      if(params.get('id') && params.get('id') != '0'){
        this.hasEdit = true;
        this.GetUser(params.get('id'));
      }
    });

   this.Initiateform();
   this.GetRoles();
  }
  Cancel(){
    debugger;
    this.Initiateform();
  }
  Initiateform(){
    this.addDistibutorForm = this.formBuilder.group({
      id: ['',],
      shopName:['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      password:['', Validators.required],
      currentPassword:['', Validators.required],
      role: ['', Validators.required],
      addressLine1: ['', Validators.required],
      addressLine2: ['', Validators.required],
      latitude: ['', Validators.required],
      longitude: ['', Validators.required],
      pincode: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      isActive:[true, Validators.required]
  });

  }

  get data() { return this.addDistibutorForm.controls; }

  onSubmit(){
    debugger;
    this.submitted =true;
    // stop here if form is invalid
    if (this.addDistibutorForm.invalid) {
      return;
  }

  if(this.data.password.value != this.data.currentPassword.value){
    this.hasPasswordMatch =true;
    return;
  }

    let requestData  = {} as UserDetails;
    requestData.id = this.data.id.value;
    requestData.shopName = this.data.shopName.value;
    requestData.firstName = this.data.firstName.value;
    requestData.lastName = this.data.lastName.value;
    requestData.email = this.data.email.value;
    requestData.phoneNumber = this.data.phoneNumber.value;
    requestData.password = this.data.password.value;
    requestData.currentPassword = this.data.currentPassword.value;
    requestData.role = this.data.role.value;
    requestData.addressLine1 = this.data.addressLine1.value;
    requestData.addressLine2 = this.data.addressLine2.value;
    requestData.latitude = this.data.latitude.value;
    requestData.longitude = this.data.longitude.value;
    requestData.pincode = this.data.pincode.value;
    requestData.city = this.data.city.value;
    requestData.state = this.data.state.value;
    requestData.isActive = this.data.isActive.value;

    this._user.SaveUser(requestData,this.hasEdit)
    .pipe(first())
    .subscribe(
        data => {
          debugger;
          if(data.succeeded){
            this.hasSuccess = true;
            this.success = this.hasEdit ? "Registration has been Updated successfully" :"Registration has been saved successfully.";
            this.hasEdit =false;
            this.Initiateform();
            // this.GetProductList();
          }else{
            this.hasError = true;
            this.error = "Internal Server Error.";
          }
          this.submitted =false;
        },
        error => {
          debugger;
          this.hasError = true;
          this.error = "Internal Server Error.";
        });

  }

 

  selectState() {
    debugger;
    console.log(name);
    this.districtDropDown = [];

    //districts
    if(this.data.state.value){
      let data = this.stateDropDown.filter(
        book => book.state === this.data.state.value);

        if(data.length){
          this.districtDropDown = data[0].districts;
        }
    }
    

    // console.log(this.selected);
}

GetRoles(){
  
  this._user.GetRoles()
  // .pipe(first())
  .subscribe(
      data => {
       this.roles =data;
      },
      error => {
      });
  }

  GetUser(email){
  
    this._user.GetUserByEmail(email)
    // .pipe(first())
    .subscribe(
        data => {
        debugger;
          this.addDistibutorForm = this.formBuilder.group({
            id: [data.id],
            shopName:[data.shopName, Validators.required],
            firstName: [data.firstName, Validators.required],
            lastName: [data.lastName, Validators.required],
            email: [data.email, Validators.required],
            phoneNumber: [data.phoneNumber, Validators.required],
            password:[data.password, ""],
            currentPassword:[data.currentPassword],
            role: [data.role, Validators.required],
            addressLine1: [data.addressLine1, Validators.required],
            addressLine2: [data.addressLine2, Validators.required],
            latitude: [data.latitude, Validators.required],
            longitude: [data.longitude, Validators.required],
            pincode: [data.pincode, Validators.required],
            city: [data.city, Validators.required],
            state: [data.state, Validators.required],
            isActive:[data.isActive, Validators.required]
        });

        
        },
        error => {
        });
    }

}
