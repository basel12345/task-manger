import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from 'src/app/material.module';
import { EmpolyeeComponent } from './empolyee.component';

const routes: Routes = [
    {
        path: '',
        component: EmpolyeeComponent,
        children: [
            {
                path: 'add-empolyee',
                loadChildren: './add-empolyee/add-empolyee.module#AddEmpolyeeModule'
            },
            {
                path: 'all-empolyee',
                loadChildren: './all-empolyee/all-empolyee.module#AllEmpolyeeeModule'
            },
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        DemoMaterialModule
    ],
    providers: [],
    declarations: [EmpolyeeComponent]
})


export class EmpolyeeModule { }