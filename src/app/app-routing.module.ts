import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { MergeMapComponent } from './merge-map/merge-map.component';
import { ForkJoinComponent } from "./fork-join/fork-join.component";

const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'merge-map', component: MergeMapComponent },
  { path: 'fork-join', component: ForkJoinComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
