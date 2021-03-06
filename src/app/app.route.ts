import { RouterModule, Routes } from '@angular/router';

import { Http404Component } from './http404/http404.component';
import { CvComponent } from './cv/cv.component';

const vacvRoute: Routes = [
    {
        path:'',
        pathMatch: 'full',
        redirectTo: '/id/0', 
    },
    {
        path:'id/:id',
        component: CvComponent,
        data: {
            "viewBy": "id"
        }
    },
    {
        path:'name/:name',
        component: CvComponent,
        data: {
            "viewBy": "name"
        }
    },
    {
        path:'**',
        component: Http404Component
    }
]

export const vacvRouting = RouterModule.forRoot(vacvRoute,{ useHash: false });