import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoMaterialModule } from 'src/app/material.module';
import { ProjectsComponent } from './projects.component';
import { AddProjectComponent } from './add-project/add-project.component';


const routes: Routes = [
	{
		path: '',
        component: ProjectsComponent,
        children:[
            { path: '', redirectTo: 'all-projects', pathMatch: 'full' },
            {
                path: 'all-projects',
                loadChildren: "src/app/manger/projects/all-projects/all-projects.module#AllProjectsModule"
            },
            {
              path: 'add-project',
              loadChildren: "src/app/manger/projects/add-project/add-project.module#AddProjectModule"
            },
            { path: '**', redirectTo: 'all-projects' }
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