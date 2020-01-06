import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AltaBienesComponent } from './components/alta-bienes/alta-bienes.component';
import { BdjBnsSobrantesComponent } from './components/bdj-bns-sobrantes/bdj-bns-sobrantes.component';

const routes: Routes = [
  {
    path: 'alta-bienes',
    component: AltaBienesComponent
  },{
    path: 'bdj-bienes-sobrantes',
    component: BdjBnsSobrantesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ControlPatrimonioRoutingModule { }
