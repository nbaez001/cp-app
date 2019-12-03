import {Component, ChangeDetectionStrategy, OnDestroy, Inject } from '@angular/core';
import {MatTreeNestedDataSource, MAT_DIALOG_DATA, MatDialogRef, MatDialog } from "@angular/material";
import {NestedTreeControl} from '@angular/cdk/tree';
import {BehaviorSubject} from 'rxjs'
import { TreeItem } from '../../../../entities/tree.item';
import { ExcelVisualizarResponse, WsResponseExcelVisualizarResponse } from '../../../../dto/response/ExcelVisualizarResponse';
import { ProyectoService } from '../../../../services/proyecto.service';
import { MENSAJES } from 'app/common';
import { isProceduralRenderer } from '@angular/core/src/render3/interfaces/renderer';
import { WsResponseExcelPresupuestoHijoResponse, ExcelPresupuestoHijoResponse } from '../../../../dto/response/ExcelPresupuestoHijoResponse';
import { DebugRenderer2 } from '@angular/core/src/view/services';


@Component({
  selector: 'app-jefe-elaborador-archivo-partida-version-final',
  templateUrl: './jefe-elaborador-archivo-partida-version-final.component.html',
  styleUrls: ['./jefe-elaborador-archivo-partida-version-final.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class JefeElaboradorArchivoPartidaVersionFinalComponent implements OnDestroy{
  
  dataArchivo: any;
  dataRecibida: any;
  treee1: TreeItem;

  arrayTree: TreeItem[];
  mensaje: any;
  excelPresupuestoHijoResponse: ExcelPresupuestoHijoResponse[];
  hijos: ExcelVisualizarResponse[];

  constructor(public dialogRef: MatDialogRef<JefeElaboradorArchivoPartidaVersionFinalComponent>,
    private dialog: MatDialog, 
    private proyectoService: ProyectoService,
    @Inject(MAT_DIALOG_DATA)
    data: DatosArchivo) {
      debugger;
    this.treeSource = new MatTreeNestedDataSource<TreeItem>();  
    console.log(data);
    console.log(data.archivoExcel.presupuestoDetalle);

    this.dataRecibida = data;
    this.dataArchivo = data.archivoExcel.presupuestoDetalle;

    // this dataSource is not required but its rly. helpfull to think reactive
    this.dataSource$ = new BehaviorSubject<TreeItem[]>([]);
    this.dataSource$.subscribe(items => {
      this.treeSource.data = null;
      this.treeSource.data = items;
    });

    this.initData();
  }


  /** dummy for getting unique ids */
  private static _id = 0;

  //visualizarArchivoExcelPresupuestoFinalHijos
  
  /** tree source stuff */
  readonly dataSource$: BehaviorSubject<TreeItem[]>;
  readonly treeSource: MatTreeNestedDataSource<TreeItem>;
  /** tree control */
  readonly treeControl = new NestedTreeControl<TreeItem>(node => node.children );

  readonly hasChild = (_: number, node: TreeItem) => !!node.children && node.children.length > 0;

  readonly trackBy = (_: number, node: TreeItem) => node.id;

  /** destroy */
  ngOnDestroy() {
    this.dataSource$.complete();
  }




  /** init tree data */
  initData() {
    debugger;
      //this.treee2 = this._createTreeItem('Parent 1sss','xxxxxxxxxxxxx');
    //this.arrayTree = [ this.treee1,this.treee2 ];
    //"unidad": "", "metrado": "", "precio": "", "parcial": "89,844.67", "color": "", "idPadre": 40076, "cantidadHijo": 23, "children": null
    for(let i = 0; i <this.dataArchivo.length; i++){
      debugger;
      const roleNode  = this._createTreeItem( 0, this.dataArchivo[i].codigoItem, this.dataArchivo[i].descripcion , 
                                              this.dataArchivo[i].unidad, this.dataArchivo[i].metrado ,
                                              this.dataArchivo[i].precio, this.dataArchivo[i].parcial ,
                                              this.dataArchivo[i].idPadre, this.dataArchivo[i].nivel, this.dataArchivo[i].cantidadHijo);
      if(i==0){
        this.arrayTree = [roleNode];
      }else{
        this.arrayTree.push(roleNode);
      }
    }

    this.dataSource$.next(this.arrayTree)
  }

  /** add */
  add(node?: TreeItem) {
    console.log(node);
    console.log(node.children);
   if(node.children.length == 0){

    this.proyectoService.visualizarArchivoExcelPresupuestoFinalHijos(this.dataRecibida.fidProyecto, node.idPadre, node.nivel)
    .subscribe(
      (wsResponseExcelPresupuestoHijoResponse : WsResponseExcelPresupuestoHijoResponse)=> {
        debugger;
        if(wsResponseExcelPresupuestoHijoResponse.codResultado == 1){
          this.excelPresupuestoHijoResponse = (wsResponseExcelPresupuestoHijoResponse.response != null) ? wsResponseExcelPresupuestoHijoResponse.response : [];         
          this.agregarHijos(node, this.excelPresupuestoHijoResponse);
        }else{
          this.mensaje = MENSAJES.ERROR_NOFUNCION;
          console.info(this.mensaje);
          //this.openDialogMensaje(null,  wsResponseExcelVisualizarResponse.msgResultado, true, false, wsResponseExcelVisualizarResponse.codResultado);
        }
      },
      error => {
        this.mensaje = MENSAJES.ERROR_SERVICIO;
        console.error(error);
      }   
    ); 

    }
  }

  agregarHijos(node?: TreeItem, hijoItem?: ExcelPresupuestoHijoResponse[]): void{
    for(let i= 0; i < hijoItem.length; i++){
      if(i == 0){
        ++JefeElaboradorArchivoPartidaVersionFinalComponent._id;
      }
      const newItem = this._createTreeItem(JefeElaboradorArchivoPartidaVersionFinalComponent._id, hijoItem[i].codigoItem, hijoItem[i].descripcion , hijoItem[i].unidad  ,hijoItem[i].metrado,
                                           hijoItem[i].precio, hijoItem[i].parcial , hijoItem[i].idPadre , hijoItem[i].nivel,  hijoItem[i].cantidadHijo);

      // add as child
      if (node) {
        node.children = [...(node.children || []), newItem];
        if (!this.treeControl.isExpanded(node)) {
          this.treeControl.expand(node);
        }
      }
      // add to root
    /*   else {
        this.dataSource$.next([
          ...this.dataSource$.value,
          newItem
        ]);
      } */
      this.dataSource$.next(this.dataSource$.value);
        
    }
  }

  /** toggle node */
  toggleNode(node: TreeItem) {
    this.treeControl.toggle(node);
  }

  /** creates a new tree item */
  private _createTreeItem(id: number, name: string, descripcion: string, 
                          unidad: string, metrado: string, 
                          precio: string, parcial: string,
                          idPadre: number,  nivel: string, cantidadHijo: number,
                          ...children: TreeItem[]): TreeItem {
    return {
      id: id,
      name: name,
      descripcion: descripcion,
      unidad: unidad,
			metrado: metrado,
			precio: precio,
			parcial: parcial,
			idPadre: idPadre,
      cantidadHijo: cantidadHijo,
      nivel: nivel,
      children: children
    };
  }



}


interface DatosArchivo {
  fidProyecto: number;
  archivoExcel: ExcelVisualizarResponse;
  idCodigoArchivo: number;
  estadoCarga: string;
}
