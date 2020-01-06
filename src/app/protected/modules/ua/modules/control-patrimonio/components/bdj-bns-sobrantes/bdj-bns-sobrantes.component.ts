import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { BienSobrante } from '../../entities/bien-sobrante.model';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { DatePipe } from '@angular/common';
import { _departamentos, _estadosBien, _bienesSobrantes, _provincias, _distritos, _centrosPoblado } from '../../data';
import { RegMasivBnsSbrtsComponent } from './reg-masiv-bns-sbrts/reg-masiv-bns-sbrts.component';
import { RegIndvBnsSbrtsComponent } from './reg-indv-bns-sbrts/reg-indv-bns-sbrts.component';

@Component({
  selector: 'app-bdj-bns-sobrantes',
  templateUrl: './bdj-bns-sobrantes.component.html',
  styleUrls: ['./bdj-bns-sobrantes.component.scss']
})
export class BdjBnsSobrantesComponent implements OnInit {
  bandejaGrp: FormGroup;

  departamentos: any[];
  provincias: any[];
  distritos: any[];
  centrosPoblados: any[];
  estadosBienesSobrantes: any[];

  displayedColumns: string[];
  dataSource: MatTableDataSource<BienSobrante>;
  listaBienesSobrante: BienSobrante[];
  columnsGrilla = [
    {
      columnDef: 'nomDepartamento',
      header: 'DEPARTAMENTO',
      cell: (bn: BienSobrante) => (bn.nomDepartamento != null) ? `${bn.nomDepartamento}` : ''
    }, {
      columnDef: 'nomProvincia',
      header: 'PROVINCIA',
      cell: (bn: BienSobrante) => (bn.nomProvincia != null) ? `${bn.nomProvincia}` : ''
    }, {
      columnDef: 'nomDistrito',
      header: 'DISTRITO',
      cell: (bn: BienSobrante) => (bn.nomDistrito != null) ? `${bn.nomDistrito}` : ''
    }, {
      columnDef: 'nomCentroPoblado',
      header: 'CENTRO POBLADO',
      cell: (bn: BienSobrante) => (bn.nomCentroPoblado != null) ? `${bn.nomCentroPoblado}` : ''
    }, {
      columnDef: 'descripcionBien',
      header: 'DESCRIPCION BIEN',
      cell: (bn: BienSobrante) => (bn.descripcionBien != null) ? `${bn.descripcionBien}` : ''
    }, {
      columnDef: 'marca',
      header: 'MARCA',
      cell: (bn: BienSobrante) => (bn.marca != null) ? `${bn.marca}` : ''
    }, {
      columnDef: 'modelo',
      header: 'MODELO',
      cell: (bn: BienSobrante) => (bn.modelo != null) ? `${bn.modelo}` : ''
    }, {
      columnDef: 'tipo',
      header: 'TIPO',
      cell: (bn: BienSobrante) => (bn.tipo != null) ? `${bn.tipo}` : ''
    }, {
      columnDef: 'color',
      header: 'COLOR',
      cell: (bn: BienSobrante) => (bn.color != null) ? `${bn.color}` : ''
    }, {
      columnDef: 'serie',
      header: 'SERIE',
      cell: (bn: BienSobrante) => (bn.serie != null) ? `${bn.serie}` : ''
    }, {
      columnDef: 'medida',
      header: 'MEDIDA',
      cell: (bn: BienSobrante) => (bn.medida != null) ? `${bn.medida}` : ''
    }, {
      columnDef: 'anio',
      header: 'AÑO',
      cell: (bn: BienSobrante) => (bn.anio != null) ? `${bn.anio}` : ''
    }, {
      columnDef: 'placa',
      header: 'PLACA',
      cell: (bn: BienSobrante) => (bn.placa != null) ? `${bn.placa}` : ''
    }, {
      columnDef: 'chasis',
      header: 'CHASIS',
      cell: (bn: BienSobrante) => (bn.chasis != null) ? `${bn.chasis}` : ''
    }, {
      columnDef: 'motor',
      header: 'MOTOR',
      cell: (bn: BienSobrante) => (bn.motor != null) ? `${bn.motor}` : ''
    }, {
      columnDef: 'nomEstado',
      header: 'ESTADO',
      cell: (bn: BienSobrante) => (bn.nomEstado != null) ? `${bn.nomEstado}` : ''
    }, {
      columnDef: 'comentarios',
      header: 'COMENTARIOS',
      cell: (bn: BienSobrante) => (bn.comentarios != null) ? `${bn.comentarios}` : ''
    }
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  isLoading: boolean;

  constructor(private fb: FormBuilder, private dialog: MatDialog,
    private datePipe: DatePipe, private spinnerService: Ng4LoadingSpinnerService,
  ) { }

  ngOnInit() {
    this.spinnerService.show();
    this.bandejaGrp = this.fb.group({
      departamento: ['', []],
      provincia: ['', []],
      distrito: ['', []],
      centroPoblado: ['', []],
      estadoBien: ['', []],
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
    this.comboDepartamentos();
    this.comboEstadoBienSobrante();
    this.buscar();
    this.spinnerService.hide();
  }

  public cargarDatosTabla(): void {
    this.dataSource = null;
    if (this.listaBienesSobrante.length > 0) {
      this.dataSource = new MatTableDataSource(this.listaBienesSobrante);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  comboEstadoBienSobrante() {
    this.estadosBienesSobrantes = _estadosBien;
    this.estadosBienesSobrantes.unshift({ id: 0, nombre: 'TODOS' });

    this.bandejaGrp.get('estadoBien').setValue(this.estadosBienesSobrantes[0]);
  }

  comboDepartamentos() {
    this.departamentos = _departamentos;
    this.departamentos.unshift({ id: 0, nombre: 'TODOS' });

    this.bandejaGrp.get('departamento').setValue(this.departamentos[0]);
    this.comboProvincias();
  }

  comboProvincias() {
    let idDepartamento = this.bandejaGrp.get('departamento').value.id;
    this.provincias = _provincias.filter(el => (el.idDepartamento == idDepartamento));
    this.provincias.unshift({ id: 0, nombre: 'TODOS' });

    this.bandejaGrp.get('provincia').setValue(this.provincias[0]);
    this.comboDistritos();
  }

  comboDistritos() {
    let idProvincia = this.bandejaGrp.get('provincia').value.id;
    this.distritos = _distritos.filter(el => (el.idProvincia == idProvincia));
    this.distritos.unshift({ id: 0, nombre: 'TODOS' });

    this.bandejaGrp.get('distrito').setValue(this.distritos[0]);
    this.comboCentrosPoblado();
  }

  comboCentrosPoblado() {
    let idDistrito = this.bandejaGrp.get('distrito').value.id;
    this.centrosPoblados = _centrosPoblado.filter(el => (el.idDistrito == idDistrito));
    this.centrosPoblados.unshift({ id: 0, nombre: 'TODOS' });

    this.bandejaGrp.get('centroPoblado').setValue(this.centrosPoblados[0]);
  }

  buscar() {
    let idDepartamento = this.bandejaGrp.get('departamento').value.id;
    let idProvincia = this.bandejaGrp.get('provincia').value.id;
    let idDistrito = this.bandejaGrp.get('distrito').value.id;
    let idCentroPoblado = this.bandejaGrp.get('centroPoblado').value.id;
    let idEstadoBien = this.bandejaGrp.get('estadoBien').value.id;

    this.listaBienesSobrante = _bienesSobrantes.filter(el => (el.idDepartamento == idDepartamento) || (idDepartamento == 0));
    this.listaBienesSobrante = this.listaBienesSobrante.filter(el => (el.idProvincia == idProvincia) || (idProvincia == 0));
    this.listaBienesSobrante = this.listaBienesSobrante.filter(el => (el.idDistrito == idDistrito) || (idDistrito == 0));
    this.listaBienesSobrante = this.listaBienesSobrante.filter(el => (el.idCentroPoblado == idCentroPoblado) || (idCentroPoblado == 0));
    this.listaBienesSobrante = this.listaBienesSobrante.filter(el => (el.idEstado == idEstadoBien) || (idEstadoBien == 0));

    this.cargarDatosTabla();
  }

  regAdqMasivo() {
    const dialogRef = this.dialog.open(RegMasivBnsSbrtsComponent, {
      width: '800px',
      data: null
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  regAdqIndividual(): void {
    const dialogRef = this.dialog.open(RegIndvBnsSbrtsComponent, {
      width: '800px',
      data: null
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.listaBienesSobrante.push(result);
        this.cargarDatosTabla();
      }
    });
  }

  exportar(): void {

  }

  verBienSobrante(): void {

  }

}
