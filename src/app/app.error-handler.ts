import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { HttpErrorResponse }  from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

import { NotificationService } from './messages/notification.service';

@Injectable()
export class ApplicationErrorHandler extends ErrorHandler {

  constructor(private ns: NotificationService, private zone: NgZone) {
    super()
  }

  handleError(errorResponse: HttpErrorResponse | any) {

    this.ns.notify('teste gabriel')

    if(errorResponse instanceof HttpErrorResponse) {
      const message =  errorResponse.error.message

      this.zone.run(() => {
        switch(errorResponse.status) {
          case 401:
          this.ns.notify(message || 'Invalid usarname or password');
          break
        }
      })
    }

    super.handleError(errorResponse);

    // if(error instanceof HttpErrorResponse){
    //     let body = error.error;
    //     switch(error.status) {
    //       case 401:
    //         alert('Invalid user or password');
    //         break
    //       default:
    //         errorMessage = `${error.url}: ${error.status} -  ${error.statusText || ''} -- ${body}`;
    //     }
    // } else {
    //     errorMessage = error.message ? error.message : error.toString();
    // }

  }
}
