import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ForkJoinComponent } from './fork-join/fork-join.component';
import { BulmaComponent } from './bulma/bulma.component';

@NgModule({
  declarations: [
    AppComponent,
    MergeMapComponent,
    ForkJoinComponent,
    BulmaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
