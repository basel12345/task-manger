import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoMaterialModule } from 'src/app/material.module';
import { AllEmpolyeeComponent } from 'src/app/manger/empolyee/all-empolyee/all-empolyee.component';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
    {
        path: '',
        component: AllEmpolyeeComponent
    }
];

@NgModule({
    imports: [
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        DemoMaterialModule
    ],
    providers: [],
    declarations: [
        AllEmpolyeeComponent
    ]
})


export class AllEmpolyeeModule { }