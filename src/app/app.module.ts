import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CvModule } from './cv/cv.module';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing/routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule, // CLI adds AppRoutingModule to the AppModule's imports array
    BrowserAnimationsModule,
    CvModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
