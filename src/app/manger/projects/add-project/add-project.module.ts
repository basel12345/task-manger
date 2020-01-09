import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from 'src/app/material.module';
import { AddProjectComponent } from './add-project.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
	{
      path: '',
      component: AddProjectComponent,
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
  declarations: [
    AddProjectComponent
  ]
})


export class AddProjectModule { }