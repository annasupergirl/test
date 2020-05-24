import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store'
import { AppStateXS } from './app.state';

@NgModule({
   declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(appRoutes),
    NgxsModule.forRoot([AppStateXS]),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
