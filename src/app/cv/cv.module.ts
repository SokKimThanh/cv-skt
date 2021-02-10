import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from 'ngx-owl-carousel-o';

import { CarouselHolderComponent } from '../carousel-holder/carousel-holder.component';
import { ContactComponent } from '../contact/contact.component';
import { WorkExperienceComponent } from '../work-experience/work-experience.component';
import { CvComponent } from './cv.component';


@NgModule({
  imports: [CommonModule, CarouselModule],
  declarations: [
    CarouselHolderComponent,
    WorkExperienceComponent,
    CvComponent,
    ContactComponent,
  ]
})
export class CvModule { }
