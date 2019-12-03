import { Component, OnInit, Inject } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { MAT_DIALOG_DATA, MatTableDataSource, MatDialogRef, MatDialog } from '@angular/material';
import { ProyectoService } from '../../../../services/proyecto.service';
import { ExcelVisualizarResponse, FilePresupuestoDetalle } from '../../../../dto/response/ExcelVisualizarResponse';
import { ExcelPartidaVisualizarResponse, FilePrecioUnitarioCabecera, FilePrecioUnitarioDetalle } from '../../../../dto/response/ExcelPartidaVisualizarResponse';
import { MENSAJES } from 'app/common';
import { MessageComponent } from 'app/public/message/message.component';
import { WsApiOutResponse } from '../../../../dto/response/WsApiOutResponse';

@Component({
  selector: 'app-jefe-elaborador-archivo-ver-partida',
  templateUrl: './jefe-elaborador-archivo-ver-partida.component.html',
  styleUrls: ['./jefe-elaborador-archivo-ver-partida.component.scss']
})
export class JefeElaboradorArchivoVerPartidaComponent implements OnInit {


  idCodigo:number;
  codigoPresupuesto: string;
  nombrePresupuesto: string;
  subCodigoPresupuesto: string;
  nombreSubPresupuesto: string;
  fecha: string;


  isExtendedRow = (index, item) => item.extend;
  columnas: string[];

  dataSource:  MatTableDataSource<ExcelPartidaVisualizarResponse>;
  dataSourceDetalle: MatTableDataSource<FilePrecioUnitarioDetalle>;

  excelPartida : any[];
  mensaje: string;
  habilitarBtnConformidad: boolean;



  ngOnInit(){
    //this.columnas = ['Codigo','Descripcion','CategoriaInsumo','Unidad','Cuadrilla','Cantidad','Precio','Parcial']; 

  }
  
  constructor(public dialogRef: MatDialogRef<JefeElaboradorArchivoVerPartidaComponent>,
    private proyectoService: ProyectoService,
    @Inject(MAT_DIALOG_DATA)
    private datos: DatosArchivo,
    private dialog: MatDialog){

      debugger;
    if(typeof datos.archivoExcelPartida !== 'undefined' && datos.archivoExcelPartida.length > 0){
      console.log(datos.archivoExcelPartida);
      if(typeof datos.archivoExcelPartida[0].precioUnitarioCabecera !== 'undefined'){
        console.log(datos.archivoExcelPartida[0].precioUnitarioCabecera);
        console.log(datos.archivoExcelPartida[0].precioUnitarioCabecera[0].detallePrecioUnitario);
      }
     
      this.visualizarPartida(datos);
      if(datos.estadoCarga != "4"){
        this.habilitarBtnConformidad = true;
      }else{
        this.habilitarBtnConformidad = false;
      }
    }

  }


  visualizarPartida(datos: DatosArchivo): void{
    debugger;
    /* this.codigoPresupuesto = datos.archivoExcelPartida.precioUnitariocabecera.codigoPresupuesto;
    this.nombrePresupuesto= datos.archivoExcelPartida.precioUnitariocabecera.nombrePresupuesto;
    this.subCodigoPresupuesto = datos.archivoExcelPartida.precioUnitariocabecera.subCodigoPresupuesto;
    this.nombreSubPresupuesto = datos.archivoExcelPartida.precioUnitariocabecera.nombreSubPresupuesto;
    this.fecha= datos.archivoExcelPartida.precioUnitariocabecera.fecha;
 */
    
    this.dataSource = new MatTableDataSource(datos.archivoExcelPartida);

    //this.dataSource = new MatTableDataSource(datos.archivoExcelPartida.precioUnitarioDetalle);

    //this.dataSourceDetalle = new MatTableDataSource(datos.archivoExcelPartida.precioUnitarioDetalle);

    
   // console.log(datos.archivoExcelPartida.precioUnitarioDetalle);
    this.excelPartida = datos.archivoExcelPartida;
  }


  darConformidadExcelPartida(): void{
    this.openDialogMensajeConfirm(MENSAJES.ARCHIVO_CONFIRMAR_CONFORMIDAD_EXCEL,null, false, true, null);
  }


  darConformidad() {

    this.proyectoService.aceptarConformidadArchivo(this.datos.idCodigoArchivo).subscribe(

      (wsApiOutResponse : WsApiOutResponse)=> {
        debugger;
        if(wsApiOutResponse.codResultado == 1){
          this.mensaje = MENSAJES.ARCHIVO_CONFORMIDAD_INFO_SUCCESS;
          this.openDialogMensaje("", this.mensaje ,true,false, null);
        }
      },
      error => {
        this.mensaje = MENSAJES.ERROR_SERVICIO;
        console.error(this.mensaje);
      }
    ); 
  }



  public openDialogMensajeConfirm(
    
    message: string,
    message2: string,
    alerta: boolean,
    confirmacion: boolean,
    valor: any
  ): void {
    debugger;
    const dialogRef = this.dialog.open(MessageComponent, {
      width: '400px',
      disableClose: true,
      data: {
        title: MENSAJES.ARCHIVO_CONFIRMAR_CONFORMIDAD_TITLE_PRESUPUESTO,
        message: message,
        message2: message2,
        alerta: alerta,
        confirmacion: confirmacion,
        valor: valor
      }
    });
    dialogRef.afterClosed().subscribe((confirm: boolean) => {
  
      if (confirm) { 
       this.darConformidad();
      }
    });
  }

  public openDialogMensaje(
    message: string,
    message2: string,
    alerta: boolean,
    confirmacion: boolean,
    valor: any
  ): void {
    let conformidadRealizada: Object = {
      valorDevolver: "CONFORMIDAD_REALIZADA",
    };
    const dialogRef = this.dialog.open(MessageComponent, {
      width: '400px',
      disableClose: true,
      data: {
        title: MENSAJES.ARCHIVO_TITLE,
        message: message,
        message2: message2,
        alerta: alerta,
        confirmacion: confirmacion,
        valor: valor
      }
    });
    dialogRef.afterClosed().subscribe((ok: number) => {    
      this.dialogRef.close(conformidadRealizada);  
    });
  }

}

interface DatosArchivo {
  fidProyecto: number;
  archivoExcel: ExcelVisualizarResponse;
  archivoExcelPartida: ExcelPartidaVisualizarResponse[];
  idCodigoArchivo: number;
  estadoCarga: string;
}

