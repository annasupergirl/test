import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SecondComponent } from './second.component';
import { secondRoutes } from './second.routes';
import { CommonModule } from '@angular/common';

@NgModule({
   declarations: [
    SecondComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(secondRoutes),
  ],
})
export class SecondModule { }
