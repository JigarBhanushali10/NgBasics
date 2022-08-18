import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

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
    return next.handle(authoRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMsg = '';
        if (error.error instanceof ErrorEvent) {
          console.log('This is client side error');
          errorMsg = `Error: ${error.error.message}`;
        } else {
          alertsometing('This is server side error');
          errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
        }
        return throwError(errorMsg);
      })
    )
  }
}

var alertsometing = (function(string) {
  var executed = false;
  return function(string: string) {
      if (!executed) {
          executed = true;
        alert(string)
      }
  };
})();