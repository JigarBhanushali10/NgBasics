import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CustomInterceptor implements HttpInterceptor {

  constructor() {
  }
  authToken: string = "OS1Ed51sadgfds56g1dsd21g3ds111E1165rs1g3as1d3e3a1";
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {


    const authoRequest = request.clone({
      setHeaders: {
        Authorization: `Token: ${this.authToken}`
      }
    });

    // console.log(authoRequest.headers.getAll("Authorization"));
    return next.handle(authoRequest);
  }
}
