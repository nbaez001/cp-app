import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControlPatrimonioRoutingModule } from './control-patrimonio-routing.module';
import { AltaBienesComponent } from './components/alta-bienes/alta-bienes.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [AltaBienesComponent],
  imports: [
    SharedModule,
    CommonModule,
    ControlPatrimonioRoutingModule
  ]
})
export class ControlPatrimonioModule { }
