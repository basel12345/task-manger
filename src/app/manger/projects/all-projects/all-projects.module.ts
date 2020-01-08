import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoMaterialModule } from 'src/app/material.module';
import { AllProjectsComponent } from './all-projects.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EditProjectComponent } from './edit-project/edit-project.component';


const routes: Routes = [
	{
		path: '',
        component: AllProjectsComponent
    },
    {
		path: 'edit-project/:id',
        component: EditProjectComponent
	}
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    DemoMaterialModule
],
providers:    [],
declarations: [
    AllProjectsComponent,
    EditProjectComponent
]
})


export class AllProjectsModule { }