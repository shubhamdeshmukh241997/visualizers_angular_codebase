import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SerachNameComponent } from './serach-name/serach-name.component';

const routes: Routes = [
  {path: 'v1/TeamsMessage/me', component: SerachNameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
