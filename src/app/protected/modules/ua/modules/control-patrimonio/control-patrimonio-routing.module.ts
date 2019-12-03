import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AltaBienesComponent } from './components/alta-bienes/alta-bienes.component';

const routes: Routes = [
  {
    path: 'alta-bienes',
    component: AltaBienesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ControlPatrimonioRoutingModule { }
