import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashRoutingModule } from './dash-routing.module';
import { PrincipalComponent } from './principal/principal.component';

@NgModule({
  declarations: [PrincipalComponent],
  imports: [
    CommonModule,
    DashRoutingModule
  ]
})
export class DashModule { }
