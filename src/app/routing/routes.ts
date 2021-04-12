import { Routes } from '@angular/router';

export const ROUTES: Routes = [
    { path: 'cv-sokkimthanh', loadChildren: () => import('../cv/cv.module').then(m => m.CvModule) },
    { path: '**', redirectTo: 'cv-sokkimthanh' },
];
