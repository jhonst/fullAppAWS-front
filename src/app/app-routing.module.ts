import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashModule } from './dash/dash.module';
import { AuthModule } from './auth/auth.module';


const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
  { path: 'dash', loadChildren: './dash/dash.module#DashModule' }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }