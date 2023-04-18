import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EinkaufComponent } from './einkauf/einkauf.component';
import { ListAComponent } from './list-a/list-a.component';
import { ListBComponent } from './list-b/list-b.component';

@NgModule({
  declarations: [
    AppComponent,
    EinkaufComponent,
    ListAComponent,
    ListBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
