import { Routes } from '@angular/router';
import { CvComponent } from '../cv/cv.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { CanActivateRouteGuard } from './can-activate-route.guard';

export const ROUTES: Routes = [
    { path: 'cv-sokkimthanh', component: CvComponent },
    { path: '', redirectTo: 'cv-sokkimthanh', pathMatch: 'full' }, // redirect to `first-component`
    { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
]; // sets up routes constant where you define your routes
