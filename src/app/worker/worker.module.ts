import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoMaterialModule } from '../material.module';
import { WorkerComponent } from './worker.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
	{
		path: '',
        component: WorkerComponent,
        children: [
            {
                path: 'profile',
                loadChildren: './profile/profile.module#ProfileModule'
            }
        ]
	}
];

@NgModule({
  imports:      [
       RouterModule.forChild(routes),
       DemoMaterialModule
],
  providers:    [],
  declarations: [WorkerComponent, NavbarComponent]
})


export class WorkerModule { }