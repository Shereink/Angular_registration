import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth:AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // const res  = request.clone({
    //   headers :request.headers.set("Token",`bearer ${this.auth.getToken()}`)
    // })
    const res  = request.clone({
      headers :request.headers.set("authorization",`bearer ${this.auth.getToken()}`)
    })    
    return next.handle(res);
  }
}

