import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'angular-admin-lte';
import {authService} from '../app/Service/auth';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public customLayout: boolean;

  constructor(
    private layoutService: LayoutService,
    private authService:authService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    debugger;
    var auth =this.authService.currentUserValue;
    if( !auth|| (auth && !auth.access_token)){
      this.router.navigate(["login"]);
    }
    this.layoutService.isCustomLayout.subscribe((value: boolean) => {
      this.customLayout = value;
    });
  }
}
