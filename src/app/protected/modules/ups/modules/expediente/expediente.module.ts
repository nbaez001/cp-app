import { NgModule } from '@angular/core';

import { ExpedienteRoutingModule } from './expediente-routing.module';
import { SharedModule } from '@shared/shared.module';
import { JefeUPSComponent } from './components/jefe-ups/jefe-ups.component';
import { VisualizarComponent } from './components/jefe-ups/visualizar/visualizar.component';
import { ObservacionComponent } from './components/jefe-ups/observacion/observacion.component';
import { AsignarComponent } from './components/jefe-ups/asignar/asignar.component';
import { EncargadoVerificarComponent } from './components/encargado-ups/encargado-verificar/encargado-verificar.component';
import { SolicitarEvaluacionComponent } from './components/encargado-ups/encargado-solicitar/solicitar-evaluacion/solicitar-evaluacion.component';
import { SolicitarDesignacionComponent } from './components/encargado-ups/encargado-solicitar/solicitar-designacion/solicitar-designacion.component';
import { SolicitarTdrComponent } from './components/encargado-ups/encargado-solicitar/solicitar-tdr/solicitar-tdr.component';
import { CoordinadorAsignarComponent } from './components/coordinador-ups/coordinador-asignar/coordinador-asignar.component';
import { ObservarDevueltoComponent } from './components/coordinador-ups/observar-devuelto/observar-devuelto.component';
import { AlertMessageComponent } from '@shared/components/alert-message/alert-message.component';
import { MessageComponent } from 'app/public/message/message.component';
import { EncargadoService } from './services/encargado.service';
import { ItemComboService } from './services/item-combo.service';
import { PersonalService } from './services/personal.service';
import { ProyectoService } from './services/proyecto.service';
import { SharedService } from './services/shared.service';
import { MatRadioModule } from '@angular/material/radio';
import { CoordinadorDetalleComponent } from './components/coordinador-ups/coordinador-detalle/coordinador-detalle.component';
import { EncargadoComponent } from './components/encargado-ups/encargado.component';
import { CoordinadorComponent } from './components/coordinador-ups/coordinador.component';
import { AusenciaJefeComponent } from './components/jefe-ups/ausencia-jefe/ausencia-jefe.component';
import { EncargadoDetalleComponent } from './components/encargado-ups/encargado-detalle/encargado-detalle.component';
import { EncargadoArchivoComponent } from './components/encargado-ups/encargado-archivo/encargado-archivo.component';
import { OnlyLettersDirective } from './components/directives/only-letters.directive';
import { CoordinadorAprobarComponent } from './components/coordinador-ups/coordinador-aprobar/coordinador-aprobar.component';
import { AprobarExpedienteComponent } from './components/jefe-ups/aprobar-expediente/aprobar-expediente.component';
import { AuthModule } from '@shared/auth/auth.module';
import { JefeElaboradorComponent } from './components/jefe-elaborador/jefe-elaborador.component';
import { JefeRevisorComponent } from './components/jefe-revisor/jefe-revisor.component';
import { JefeElaboradorDetalleComponent } from './components/jefe-elaborador/jefe-elaborador-detalle/jefe-elaborador-detalle.component';
import { JefeElaboradorArchivoComponent } from './components/jefe-elaborador/jefe-elaborador-archivo/jefe-elaborador-archivo.component'; 
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { RegistroAlcanceDescripcionComponent } from './components/encargado-ups/encargado-solicitar/solicitar-tdr/registro-alcance-descripcion/registro-alcance-descripcion.component';
import { TdrService } from './services/tdr.service';
import { RegistroEntregableComponent } from './components/encargado-ups/encargado-solicitar/solicitar-tdr/registro-entregable/registro-entregable.component';
import { RegistroActividadComponent } from './components/encargado-ups/encargado-solicitar/solicitar-tdr/registro-entregable/registro-actividad/registro-actividad.component';
import { RegistroParticularComponent } from './components/encargado-ups/encargado-solicitar/solicitar-tdr/registro-particular/registro-particular.component';
import { RegistroGeneralComponent } from './components/encargado-ups/encargado-solicitar/solicitar-tdr/registro-general/registro-general.component';
import { RegistroTdrComponent } from './components/encargado-ups/encargado-solicitar/solicitar-tdr/registro-tdr/registro-tdr.component';
import { RegistroFormaPagoComponent } from './components/encargado-ups/encargado-solicitar/solicitar-tdr/registro-forma-pago/registro-forma-pago.component';
import { JefeElaboradorArchivoVerComponent } from './components/jefe-elaborador/jefe-elaborador-archivo/jefe-elaborador-archivo-ver/jefe-elaborador-archivo-ver.component';
import { JefeElaboradorArchivoVerPartidaComponent } from './components/jefe-elaborador/jefe-elaborador-archivo/jefe-elaborador-archivo-ver-partida/jefe-elaborador-archivo-ver-partida.component';
import { JefeElaboradorArchivoVerGeneralComponent } from './components/jefe-elaborador/jefe-elaborador-archivo/jefe-elaborador-archivo-ver-general/jefe-elaborador-archivo-ver-general.component';
import { JefeElaboradorArchivoVerSupervisionComponent } from './components/jefe-elaborador/jefe-elaborador-archivo/jefe-elaborador-archivo-ver-supervision/jefe-elaborador-archivo-ver-supervision.component';
import { CdkColumnDef } from '@angular/cdk/table';
import { JefeElaboradorArchivoPresupuestoComponent } from './components/jefe-elaborador/jefe-elaborador-archivo-presupuesto/jefe-elaborador-archivo-presupuesto.component';

 
@NgModule({
  declarations: [
    JefeUPSComponent,
    AsignarComponent,
    VisualizarComponent,
    ObservacionComponent,
    EncargadoComponent,
    EncargadoVerificarComponent,
    SolicitarEvaluacionComponent,
    SolicitarDesignacionComponent,
    SolicitarTdrComponent,
    CoordinadorComponent,
    CoordinadorAsignarComponent,
    ObservarDevueltoComponent,
    AlertMessageComponent,
    AusenciaJefeComponent,
    MessageComponent,
    CoordinadorDetalleComponent,
    EncargadoDetalleComponent,
    EncargadoArchivoComponent,
    OnlyLettersDirective,
    CoordinadorAprobarComponent,
    AprobarExpedienteComponent,
    JefeElaboradorComponent,
    JefeRevisorComponent,
    JefeElaboradorDetalleComponent,
    JefeElaboradorArchivoComponent,
    RegistroAlcanceDescripcionComponent,
    RegistroEntregableComponent,
    RegistroActividadComponent,
    RegistroParticularComponent,
    RegistroGeneralComponent,
    RegistroTdrComponent,
    RegistroFormaPagoComponent,
    JefeElaboradorArchivoVerComponent,
    JefeElaboradorArchivoVerPartidaComponent,
    JefeElaboradorArchivoVerGeneralComponent,
    JefeElaboradorArchivoVerSupervisionComponent,
    JefeElaboradorArchivoPresupuestoComponent,

  ],
  entryComponents: [
    AsignarComponent,
    VisualizarComponent,
    ObservacionComponent,
    EncargadoVerificarComponent,
    SolicitarEvaluacionComponent,
    SolicitarDesignacionComponent,
    CoordinadorAsignarComponent,
    ObservarDevueltoComponent,
    MessageComponent,
    AlertMessageComponent,
    EncargadoDetalleComponent,
    CoordinadorDetalleComponent,
    EncargadoArchivoComponent,
    CoordinadorAprobarComponent,
    AprobarExpedienteComponent,
    JefeElaboradorDetalleComponent,
    JefeElaboradorArchivoComponent,
    RegistroAlcanceDescripcionComponent,
    RegistroEntregableComponent,
    RegistroActividadComponent,
    RegistroGeneralComponent,
    RegistroParticularComponent,
    RegistroFormaPagoComponent,
    JefeElaboradorArchivoVerComponent,
    JefeElaboradorArchivoVerPartidaComponent,
    JefeElaboradorArchivoVerGeneralComponent,
    JefeElaboradorArchivoVerSupervisionComponent,
    JefeElaboradorArchivoPresupuestoComponent,

  ],
  providers: [
    EncargadoService,
    ItemComboService,
    PersonalService,
    ProyectoService,
    SharedService,
    TdrService,
    CdkColumnDef
  ],
  imports: [
    SharedModule,
    ExpedienteRoutingModule,
    MatRadioModule,
    CKEditorModule,
    AuthModule.forRoot()
  ]
})
export class ExpedienteModule { }
