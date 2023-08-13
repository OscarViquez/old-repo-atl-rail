import { Route } from '@angular/router';
// import {TrainArrivalsComponent} from '@railmap/train/smart'

export const appRoutes: Route[] = [
    {
        path: '',
        loadComponent: () => import('@railmap/train/smart').then((component) => component.TrainArrivalsComponent),
        pathMatch: 'full'
    },
    {
        path: 'trains',
        loadComponent: () => import('@railmap/train/smart').then((component) => component.TrainArrivalsComponent),
    }
];
