import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatCardModule } from '@angular/material/card';

import { CarouselHolderComponent } from '../carousel-holder/carousel-holder.component';
import { ContactComponent } from '../contact/contact.component';
import { WorkExperienceComponent } from '../work-experience/work-experience.component';
import { CvComponent } from './cv.component';


@NgModule({
  imports: [CommonModule, CarouselModule, MatCardModule],
  declarations: [
    CarouselHolderComponent,
    WorkExperienceComponent,
    CvComponent,
    ContactComponent,
  ]
})
export class CvModule { }
