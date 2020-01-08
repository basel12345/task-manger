import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoMaterialModule } from '../material.module';
import { MangerComponent } from './manger.component';
import { NavbarComponent } from './navbar/navbar.component';


const routes: Routes = [
	{
		path: '',
        component: MangerComponent,
        children:[
            {
                path: 'empolyee',
                loadChildren: "src/app/manger/empolyee/empolyee.module#EmpolyeeModule"
            },
            {
                path: 'projects',
                loadChildren: "src/app/manger/projects/projects.module#ProjectsModule"
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
  declarations: [
    MangerComponent,
    NavbarComponent
]
})


export class MangerModule { }