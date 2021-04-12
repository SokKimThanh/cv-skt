import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from 'ngx-owl-carousel-o';


import { CarouselHolderComponent } from '../carousel-holder/carousel-holder.component';
import { ContactComponent } from '../contact/contact.component';
import { WorkExperienceComponent } from '../work-experience/work-experience.component';
import { CvComponent } from './cv.component';
import { MaterialModule } from '../shared/material/material.module';
import { CvAppComponent } from './cvapp/cvapp.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { MaincontentComponent } from './components/maincontent/maincontent.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

const ROUTES: Routes = [
  {
    path: '', component: CvAppComponent,
    children: [
      { path: '', component: MaincontentComponent }
    ]
  }
]
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    CarouselHolderComponent,
    WorkExperienceComponent,
    CvComponent,
    ContactComponent,
    CvAppComponent,
    SidenavComponent,
    MaincontentComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    MaterialModule,
    RouterModule.forChild(ROUTES),
  ],
})
export class CvModule { }
