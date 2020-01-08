import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoMaterialModule } from 'src/app/material.module';
import { AllEmpolyeeComponent } from 'src/app/manger/empolyee/all-empolyee/all-empolyee.component';
import { EmpolyeesComponent } from 'src/app/manger/empolyee/empolyee.component';


const routes: Routes = [
	{
		path: '',
        component: EmpolyeesComponent,
        children:[
            {
                path: 'all-empolyee',
                loadChildren: "src/app/manger/empolyee/all-empolyee/all-empolyee.module#AllEmpolyeeModule"
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
    EmpolyeesComponent
]
})


export class EmpolyeeModule { }