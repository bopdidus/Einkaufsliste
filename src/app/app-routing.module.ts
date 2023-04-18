import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EinkaufComponent } from './einkauf/einkauf.component';
import { ListAComponent } from './list-a/list-a.component';
import { ListBComponent } from './list-b/list-b.component';

const routes: Routes = [
  {path: 'a-component', component: ListAComponent},
  {path: 'b-component', component: ListBComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
