import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from 'src/app/material.module';
import { ProfileComponent } from './profile.component';
import { ViewProjectComponent } from './view-project/view-project.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';

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
    DemoMaterialModule,
    NgbModule,
  //   AgmCoreModule.forRoot({
  //     apiKey: "AIzaSyBPRNfjYT5yCUXp6bz9NDKBt5Pg8HUXimo",
  //     libraries: ["places", "geometry"]
  //     /* apiKey is required, unless you are a premium customer, in which case you can use clientId */
  // })
],
  providers:[],
  declarations: [
      ProfileComponent,
      ViewProjectComponent
    ],
  bootstrap: [ProfileComponent]  
})


export class ProfileModule { }