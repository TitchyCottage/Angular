import { Component } from '@angular/core';
import {authService  } from '../../../app/Service/auth';
@Component({
  selector: 'app-header-inner',
  templateUrl: './header-inner.component.html'
})
export class HeaderInnerComponent {

  constructor(private _user:authService) { }
  user:string;
  designation:string;
  profileUrl:string;
  ngOnInit() {
    var data = this._user.currentUserValue;
    if(data.access_token){
      this.user = data.FullName;
debugger;
      if(data.Roles == "Admin"){
        this.designation = data.FullName + " - System Administrator"
        this.profileUrl = 'assets/img/avatar5.png';
      }else if(data.Roles == "Distributor"){
        this.designation = data.FullName + " - Senior Marketing executive"
        this.profileUrl = 'assets/img/avatar04.png';
      }
      else if(data.Roles == "Manufacturer"){
        this.designation = data.FullName + " - Manufacturer"
        this.profileUrl = 'assets/img/avatar5.png';
      }
      else{
        this.designation = data.FullName + " - Retailer"
        this.profileUrl = 'assets/img/avatar04.png';
      }
    }
  }

  SignOut()
  {

  }
}
