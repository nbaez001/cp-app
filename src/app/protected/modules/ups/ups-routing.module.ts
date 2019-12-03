import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: 'gestion-plataformas',
    loadChildren: './modules/gest-plataformas/gest-plataformas.module#GestPlataformasModule'
  },
  {
    path: 'expediente',
    loadChildren: './modules/expediente/expediente.module#ExpedienteModule'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpsRoutingModule { }

