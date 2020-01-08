import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoMaterialModule } from 'src/app/material.module';
import { ProjectsComponent } from './projects.component';


const routes: Routes = [
	{
		path: '',
        component: ProjectsComponent,
        children:[
            {
                path: 'all-projects',
                loadChildren: "src/app/manger/projects/all-projects/all-projects.module#AllProjectsModule"
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
    ProjectsComponent
]
})


export class ProjectsModule { }