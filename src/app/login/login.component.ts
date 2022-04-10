import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  public loginValid = true;
  public email = '';
  public password = '';

  public onSubmit(): void {
    this.loginValid = true;
  }

  constructor() { };

  ngOnInit(): void {
  };
}
