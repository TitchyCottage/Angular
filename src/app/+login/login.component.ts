import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { authService } from '../Service/auth';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  hasError = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(private _auth: authService, 
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.returnUrl ="alert";
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    debugger;
    this.submitted = true;
    this.hasError =false; 
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this._auth.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                  debugger;
                  localStorage.setItem('currentUser', JSON.stringify(data));
                  debugger;
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                  debugger;
                    this.error ="The Email or password is incorrect.";
                    this.hasError = true;
                    this.loading = false;
                });
}

}
