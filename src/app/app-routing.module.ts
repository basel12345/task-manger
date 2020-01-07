import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    { path: '', redirectTo: 'super-admin', pathMatch: 'full' },
    { path: 'super-admin', loadChildren: './super-admin/super-admin.module#SuperAdminModule' },
    {
      path: 'super-admin',
      loadChildren: './super-admin/super-admin.module#SuperAdminModule'
    },
    { path: '**', redirectTo: 'super-admin' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
