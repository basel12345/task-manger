import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AllEmpolyeeComponent } from './all-empolyee.component';

const routes: Routes = [
	{
      path: '',
      component: AllEmpolyeeComponent,
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
  declarations: [AllEmpolyeeComponent]
})


export class AllEmpolyeeeModule { }