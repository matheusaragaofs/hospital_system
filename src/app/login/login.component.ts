import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from './auth.service';
import { filter, Subject, take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginValid = true;
  hide_password = true;
  email = '';
  password = '';
  isAuthenticated = false;

  private _destroySub$ = new Subject<void>();
  private readonly returnUrl: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _authService: AuthService
  ) {
    this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
  };

  onSubmit(): void {
    this._authService.login(this.email, this.password).pipe(
      take(1)
    ).subscribe({
      next: _ => {
        this.loginValid = true;
        this._router.navigateByUrl('/');
      },
      error: _ => this.loginValid = false
    });
  }

  ngOnInit(): void {
    this._authService.isAuthenticated$.pipe(
      filter((isAuthenticated: boolean) => isAuthenticated),
      takeUntil(this._destroySub$)
    ).subscribe(_ => this._router.navigateByUrl(this.returnUrl));
  }

  ngOnDestroy(): void {
    this._destroySub$.next();
  }
}