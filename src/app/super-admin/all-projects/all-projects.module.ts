import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AllProjectsComponent } from './all-projects.component';
import { DemoMaterialModule } from 'src/app/material.module';
import { ViewProjectComponent } from './view-project/view-project.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
	{
      path: '',
      component: AllProjectsComponent,
    },
    {
        path: 'edit-project/:id',
        component: EditProjectComponent,
    },
    {
        path: 'view-project/:id',
        component: ViewProjectComponent,
    }
];

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    DemoMaterialModule
],
  providers:[],
  declarations: [AllProjectsComponent, ViewProjectComponent, EditProjectComponent]
})


export class AllProjectsModule { }