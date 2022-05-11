import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, take, takeUntil } from 'rxjs';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'HSE';
  isAuthenticated = false;

  
  private _destroySub$ = new Subject<void>();

  constructor(private _authService: AuthService) { }

  ngOnInit(): void {
    this._authService.isAuthenticated$.pipe(
      takeUntil(this._destroySub$)
    ).subscribe((isAuthenticated: boolean) => this.isAuthenticated = isAuthenticated);
  }

  logout(): void {
    this._authService.logout('/').pipe(take(1));
  }

  ngOnDestroy(): void {
    this._destroySub$.next();
  }
}
