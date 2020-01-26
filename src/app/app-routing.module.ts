import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    {
      path: 'super-admin',
      loadChildren: './super-admin/super-admin.module#SuperAdminModule'
    },
    {
      path: 'manger',
      loadChildren: './manger/manger.module#MangerModule'
    },
    {
      path: 'worker',
      loadChildren: './worker/worker.module#WorkerModule'
    },
    { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
