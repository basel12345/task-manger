import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from 'src/app/material.module';
import { AddEmpolyeeComponent } from './add-empolyee.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const routes: Routes = [
    {
        path: '',
        component: AddEmpolyeeComponent,
    }
];

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule.forChild(routes),
        DemoMaterialModule
    ],
    providers: [],
    declarations: [AddEmpolyeeComponent]
})


export class AddEmpolyeeModule { }