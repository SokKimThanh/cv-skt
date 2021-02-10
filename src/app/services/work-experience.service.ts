import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { WorkExperience } from '../shared/workexperience';
import { WORKEXPERIENCES } from '../shared/workexperiences';

@Injectable({
  providedIn: 'root'
})
export class WorkExperienceService {

  constructor() { }
  getWorkExperiences(): Observable<WorkExperience[]> {
    return of(WORKEXPERIENCES);
  }
}
