import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRoute } from '@angular/router';

@Injectable()
export class CanActivateRouteGuard implements CanActivate {
    id: string;
    url: string;
    user;
    constructor(route: ActivatedRoute) {
        this.id = route.snapshot.params.id;
        this.url = route.snapshot.url.join('');
        this.user = route.snapshot.data.user;

        route.url.subscribe(() => {
            console.log(route.snapshot.params.id);
        });
    }
    // tslint:disable-next-line:max-line-length
    canActivate(): boolean {
        if (this.url !== 'cv-sokkimthanh') {
            return false;
        } else {
            return true;
        }
    }
}
