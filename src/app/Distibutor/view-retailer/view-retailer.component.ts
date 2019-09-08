import { Component, OnInit,Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { userService } from '../../Service/user';
import {  UserDetails} from '../../models/UserDetails';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-view-retailer',
  templateUrl: './view-retailer.component.html',
  styleUrls: ['./view-retailer.component.css']
})
@Injectable()
export class ViewRetailerComponent implements OnInit {



  constructor( private _user:userService, private route: ActivatedRoute,
    private router: Router ) { }

  userDetails :UserDetails[];

  ngOnInit() {
    
    this.GetRetailerList();
   
  }

  EditUser(email){
    if(email){
      this.router.navigate(['Distibutor/add-retailer',email]);
    }
  }
  
    GetRetailerList(){
    
      this._user.GetRetailer()
      // .pipe(first())
      .subscribe(
          data => {
    
           debugger;
           this.userDetails =data;
          //  this.router.navigate(['/Admin/add-distibutor','kbkkkj8899']);
          },
          error => {
            debugger;
            
          });
    
      
      }

}
