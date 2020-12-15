import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';///Observable';

@Injectable()
export class AuthinterceptorService implements HttpInterceptor {
  constructor() {}
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
/*
    request = request.clone({
      setHeaders: {
        Authorization: 'somekey' //`Bearer ${this.auth.getToken()}`
      }
    });
    return next.handle(request);
  }*/
 // var headers = new Headers();
  //headers.append("Authorization", "somevalue");

  httpRequest = httpRequest.clone({
    setHeaders: {
      Authorization: 'Bearer '+"bellachao" //`Bearer ${this.auth.getToken()}`
    }
  });
  return next.handle(httpRequest);
}
}