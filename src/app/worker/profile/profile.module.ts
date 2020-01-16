import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from 'src/app/material.module';
import { ProfileComponent } from './profile.component';
import { ViewProjectComponent } from './view-project/view-project.component';

const routes: Routes = [
	{
      path: '',
      component: ProfileComponent
    },
    {
        path: 'view-project/:id',
        component: ViewProjectComponent
    }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DemoMaterialModule
],
  providers:[],
  declarations: [
      ProfileComponent,
      ViewProjectComponent
    ]
})


export class ProfileModule { }