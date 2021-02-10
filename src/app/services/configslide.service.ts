import { Injectable } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Observable, of } from 'rxjs';
import { CUSTOMOPTIONS } from '../shared/OwlOptions';

@Injectable({
  providedIn: 'root'
})
export class ConfigslideService {
  getOwlOptions(): Observable<OwlOptions[]> {
    return of(CUSTOMOPTIONS);
  }
}
