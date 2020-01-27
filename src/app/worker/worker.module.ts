import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoMaterialModule } from '../material.module';
import { WorkerComponent } from './worker.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
    {
        path: '',
        component: WorkerComponent,
        children: [
            { path: '', redirectTo: 'profile', pathMatch: 'full' },
            {
                path: 'profile',
                loadChildren: './profile/profile.module#ProfileModule'
            },
            { path: '**', redirectTo: 'profile' }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        DemoMaterialModule
    ],
    providers: [],
    declarations: [WorkerComponent, NavbarComponent]
})


export class WorkerModule { }