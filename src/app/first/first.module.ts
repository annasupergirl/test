import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FirstComponent } from './first.component';
import { firstRoutes } from './first.routes';
import { CommonModule } from '@angular/common';

@NgModule({
   declarations: [
    FirstComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(firstRoutes),
  ],
})
export class FirstModule { }
