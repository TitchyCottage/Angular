import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';
 
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {authService  } from '../app/Service/auth';


@Injectable()
export class httpSetHeaders implements HttpInterceptor {
    
  constructor(private _auth: authService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
 
 debugger;
        if (!request.headers.has('Content-Type')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        }
 
        const currentUser = this._auth.currentUserValue;
        if (currentUser && currentUser.access_token) {
            request = request.clone({
                setHeaders: { 
                    Authorization: `bearer ${currentUser.access_token}`
                }
            });
        }
 
        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    console.log('event', event);
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                let data = {};
                data = {
                    // domain: error.domain,
                    // message: error.message,
                    // reason: error.reason
                };
                console.log(data);
                return throwError(error);
            }));
    }
}