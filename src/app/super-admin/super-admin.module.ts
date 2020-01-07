import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuperAdminComponent } from './super-admin.component';
import { DemoMaterialModule } from '../material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { AllProjectsComponent } from './all-projects/all-projects.component';


const routes: Routes = [
	{
		path: '',
        component: SuperAdminComponent,
        children:[
            {
              path: 'add-project',
              loadChildren: './add-project/add-project.module#AddProjectModule'
            },
            {
              path: 'all-projects',
              loadChildren: './all-projects/all-projects.module#AllProjectsModule'
            },
            {
              path: 'empolyee',
              loadChildren: './empolyee/empolyee.module#EmpolyeeModule'
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