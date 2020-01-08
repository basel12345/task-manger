import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuperAdminComponent } from './super-admin.component';
import { DemoMaterialModule } from '../material.module';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
	{
		path: '',
        component: SuperAdminComponent,
        children:[
            {
              path: 'add-project',
              loadChildren: 'src/app/super-admin/add-project/add-project.module#AddProjectModule'
            },
            {
              path: 'all-projects',
              loadChildren: 'src/app/super-admin/all-projects/all-projects.module#AllProjectsModule'
            },
            {
              path: 'empolyee',
              loadChildren: 'src/app/super-admin/empolyee/empolyee.module#EmpolyeeModule'
            },
        ]
	}
];

@NgModule({
  imports:      [
       RouterModule.forChild(routes),
       DemoMaterialModule
],
  providers:    [],
  declarations: [SuperAdminComponent, NavbarComponent]
})


export class SuperAdminModule { }