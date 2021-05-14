import {Injectable} from '@angular/core';

@Injectable()
export class WindowService {
  // tslint:disable-next-line:typedef
  get WindowRef() {
    return window;
  }
}
