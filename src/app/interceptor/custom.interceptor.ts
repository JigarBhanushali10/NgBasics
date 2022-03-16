import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CustomInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authToken: string = "THISISENCAPSULATED";
    const authoRequest = request.clone({
      setHeaders: {Authorization: `${authToken}`}
   });
    
    console.log(authoRequest.headers.getAll("Authorization"));
    return next.handle(authoRequest);
  }
}
