import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, DecimalPipe } from '@angular/common';

import { ControlPatrimonioRoutingModule } from './control-patrimonio-routing.module';
import { AltaBienesComponent } from './components/alta-bienes/alta-bienes.component';
import { SharedModule } from '@shared/shared.module';
import { SharedModulesUaModule } from '../shared-modules-ua.module';
import { MAT_DATE_LOCALE } from '@angular/material';
import { RegAdqIndividualComponent } from './components/alta-bienes/reg-adq-individual/reg-adq-individual.component';
import { RegAdqMasivoComponent } from './components/alta-bienes/reg-adq-masivo/reg-adq-masivo.component';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { BusBienCatalogoComponent } from './components/alta-bienes/reg-adq-individual/bus-bien-catalogo/bus-bien-catalogo.component';
import { RegIndvBnsSbrtsComponent } from './components/bdj-bns-sobrantes/reg-indv-bns-sbrts/reg-indv-bns-sbrts.component';
import { RegMasivBnsSbrtsComponent } from './components/bdj-bns-sobrantes/reg-masiv-bns-sbrts/reg-masiv-bns-sbrts.component';
import { BdjBnsSobrantesComponent } from './components/bdj-bns-sobrantes/bdj-bns-sobrantes.component';

@NgModule({
  entryComponents: [
    RegAdqIndividualComponent,
    RegAdqMasivoComponent,
    BusBienCatalogoComponent,
    RegIndvBnsSbrtsComponent,
    RegMasivBnsSbrtsComponent,
  ],
  declarations: [
    RegAdqIndividualComponent,
    RegAdqMasivoComponent,
    BusBienCatalogoComponent,
    RegIndvBnsSbrtsComponent,
    RegMasivBnsSbrtsComponent,

    AltaBienesComponent,
    BdjBnsSobrantesComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    ControlPatrimonioRoutingModule,
    SharedModulesUaModule,
    Ng4LoadingSpinnerModule.forRoot()
  ],
  providers: [
    DatePipe,
    DecimalPipe,
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ]
})
export class ControlPatrimonioModule { }
