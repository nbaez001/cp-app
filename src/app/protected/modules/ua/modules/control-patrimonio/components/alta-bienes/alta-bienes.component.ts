import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { Adquisicion } from '../../entities/adquisicion.model';
import { adquisiciones, formasAdquisicion, aniosAdquisicion, mesesAdquisicion, estadosAdquisicion } from '../../data';
import { DatePipe } from '@angular/common';
import { RegAdqMasivoComponent } from './reg-adq-masivo/reg-adq-masivo.component';
import { RegAdqIndividualComponent } from './reg-adq-individual/reg-adq-individual.component';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-alta-bienes',
  templateUrl: './alta-bienes.component.html',
  styleUrls: ['./alta-bienes.component.scss']
})
export class AltaBienesComponent implements OnInit {
  bandejaGrp: FormGroup;

  displayedColumns: string[];
  dataSource: MatTableDataSource<Adquisicion>;
  listaAdquisicion: Adquisicion[];

  formasAdquisicion: Object[];
  aniosAdquisicion: Object[];
  mesesAdquisicion: Object[];
  estadosAdquisicion: Object[];

  columnsGrilla = [
    {
      columnDef: 'nomFormaAdquisicion',
      header: 'FORMA ADQUISICION',
      cell: (adquisicion: Adquisicion) => (adquisicion.nomFormaAdquisicion != null) ? `${adquisicion.nomFormaAdquisicion}` : ''
    }, {
      columnDef: 'nroDocSustentatorio',
      header: 'DOC. SUSTENTATORIO',
      cell: (adquisicion: Adquisicion) => (adquisicion.nroDocSustentatorio != null) ? `${adquisicion.nroDocSustentatorio}` : ''
    }, {
      columnDef: 'fecha',
      header: 'FECHA ADQUISICION',
      cell: (adquisicion: Adquisicion) => (adquisicion.fecha != null) ? `${this.datePipe.transform(adquisicion.fecha, 'dd/MM/yyyy')}` : ''
    }, {
      columnDef: 'nomEstado',
      header: 'ESTADO',
      cell: (adquisicion: Adquisicion) => (adquisicion.nomEstado != null) ? `${adquisicion.nomEstado}` : ''
    }, {
      columnDef: 'totalBienes',
      header: 'TOTAL BIENES',
      cell: (adquisicion: Adquisicion) => (adquisicion.totalBienes != null) ? `${adquisicion.totalBienes}` : ''
    }];


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  isLoading: boolean;

  constructor(private fb: FormBuilder, private dialog: MatDialog,
    private datePipe: DatePipe, private spinnerService: Ng4LoadingSpinnerService,
  ) { }

  ngOnInit() {
    this.spinnerService.show();
    this.bandejaGrp = this.fb.group({
      formaAdquisicion: ['', []],
      nroDocSustentatorio: ['', []],
      anioAdquisicion: ['', []],
      mesAdquisicion: ['', []],
      estadoAdquisicion: ['', []],
    });

    this.definirTabla();
    this.inicializarVariables();
  }

  definirTabla(): void {
    this.displayedColumns = [];
    this.columnsGrilla.forEach(c => {
      this.displayedColumns.push(c.columnDef);
    });
    this.displayedColumns.push('opt');
    this.displayedColumns.unshift('id');
  }

  public inicializarVariables(): void {
    this.comboFormaAdquisicion();
    this.comboAniosAdquisicion();
    this.comboMesesAdquisicion();
    this.comboEstadoAdquisicion();
    this.buscar();
    this.spinnerService.hide();
  }

  public cargarDatosTabla(): void {
    this.dataSource = null;
    if (this.listaAdquisicion.length > 0) {
      this.dataSource = new MatTableDataSource(this.listaAdquisicion);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  comboFormaAdquisicion() {
    this.formasAdquisicion = formasAdquisicion;
  }

  comboAniosAdquisicion() {
    this.aniosAdquisicion = aniosAdquisicion;
  }
  comboMesesAdquisicion() {
    this.mesesAdquisicion = mesesAdquisicion;
  }
  comboEstadoAdquisicion() {
    this.estadosAdquisicion = estadosAdquisicion;
  }

  buscar() {
    let idformaAdquisicion = this.bandejaGrp.get('formaAdquisicion').value.id;
    let nroDocSustentatorio = this.bandejaGrp.get('nroDocSustentatorio').value;
    let idAnioAdquisicion = this.bandejaGrp.get('anioAdquisicion').value.id;
    let idMesAdquisicion = this.bandejaGrp.get('mesAdquisicion').value.id;
    let idEstadoAdquisicion = this.bandejaGrp.get('estadoAdquisicion').value.id;

    this.listaAdquisicion = adquisiciones;//.filter(el => (el.idUnidad == idUnidad && el.idTambo == idTambo && el.idVehiculo == idVehiculo) || (el.idUnidad == idUnidad && el.idTambo == idTambo && 0 == idVehiculo) || (el.idUnidad == idUnidad && 0 == idTambo && 0 == idVehiculo) || (0 == idUnidad && 0 == idTambo && 0 == idVehiculo));

    this.cargarDatosTabla();
  }

  regAdqMasivo() {
    const dialogRef = this.dialog.open(RegAdqMasivoComponent, {
      width: '800px',
      data: null
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  regAdqIndividual(): void {
    const dialogRef = this.dialog.open(RegAdqIndividualComponent, {
      width: '800px',
      data: null
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.listaAdquisicion.push(result);
        this.cargarDatosTabla();
      }
    });
  }

  exportar(): void {

  }

  verAdquisicion(): void {

  }

}
