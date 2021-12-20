import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JumboviewComponent} from'./view/jumboview/jumboview.component';
import {NebularComponent} from './view/nebular/nebular.component';
const routes: Routes = [
  {path:'home',component:JumboviewComponent},
  {path:'chat',component:NebularComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
