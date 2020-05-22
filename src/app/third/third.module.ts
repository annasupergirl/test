import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThirdComponent } from './third.component';
import { thirdRoutes } from './third.routes';
import { CommonModule } from '@angular/common';

@NgModule({
   declarations: [
    ThirdComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(thirdRoutes),
  ],
})
export class ThirdModule { }
