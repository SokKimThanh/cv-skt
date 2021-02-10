import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { CarouselHolderComponent } from '../carousel-holder/carousel-holder.component';
import { ContactComponent } from '../contact/contact.component';
import { WorkExperienceComponent } from '../work-experience/work-experience.component';
import { CvComponent } from './cv.component';


@NgModule({
  imports: [CommonModule, CarouselModule, MatCardModule, MatButtonModule, MatIconModule],
  exports: [MatCardModule, MatButtonModule, MatIconModule],
  declarations: [
    CarouselHolderComponent,
    WorkExperienceComponent,
    CvComponent,
    ContactComponent,
  ]
})
export class CvModule { }
