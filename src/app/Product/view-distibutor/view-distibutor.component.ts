import { Component, OnInit,Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { userService } from '../../Service/user';
import {  UserDetails} from '../../models/UserDetails';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-view-distibutor',
  templateUrl: './view-distibutor.component.html',
  styleUrls: ['./view-distibutor.component.css']
})
@Injectable()
export class ViewDistibutorComponent implements OnInit {



  constructor( private _user:userService, private route: ActivatedRoute,
    private router: Router ) { }

  userDetails :UserDetails[];

  ngOnInit() {
    this.GetDistibutorsList();
    debugger;
   
  }

EditUser(email){
  if(email){
    this.router.navigate(['/Admin/add-distibutor',email]);
  }
}

  GetDistibutorsList(){
  
    this._user.GetDistibutors()
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
