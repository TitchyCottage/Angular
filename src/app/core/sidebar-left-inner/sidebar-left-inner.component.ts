import { Component } from '@angular/core';
import {authService  } from '../../../app/Service/auth';
import { shiftInitState } from '@angular/core/src/view';

@Component({
  selector: 'app-sidebar-left-inner',
  templateUrl: './sidebar-left-inner.component.html'
})
export class SidebarLeftInnerComponent {
  
  constructor(private _user:authService) { }
  user:string;
  profileUrl:string;
  
  ngOnInit() {
    var data = this._user.currentUserValue;
    if(data.access_token){
      this.user = data.FullName;
      if(data.Roles == "Admin"){
        this.profileUrl = 'assets/img/avatar5.png';
      }else if(data.Roles == "Distributor"){
        this.profileUrl = 'assets/img/avatar04.png';
      }
      else if(data.Roles == "Manufacturer"){
        this.profileUrl = 'assets/img/avatar5.png';
      }
      else{
        this.profileUrl = 'assets/img/avatar04.png';
      }
    }
  }

}
