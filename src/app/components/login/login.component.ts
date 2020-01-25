import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public baseUrl: string = '';
  public restUrl: string = '';
  public userCredentialForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private loginService: RestService<any>, private router: Router) {}

  ngOnInit() {}

  public login(): void {
    this.loginService
      .postData(this.baseUrl, this.restUrl, this.userCredentialForm.value)
      .subscribe((data: any) => {
        window.sessionStorage.setItem('access_token', data.access_token);
        this.router.navigate[`dashboard`];
      });
  }
}
