import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CatalogoBien } from '../../../../entities/catalogo-bien.model';
import { MatTableDataSource, MatPaginator, MatSort, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ValidationService } from '../../../../services/validation.service';
import { gruposGenerico, clasesGenerico, listaCatalogo } from '../../../../data';

@Component({
  selector: 'app-bus-bien-catalogo',
  templateUrl: './bus-bien-catalogo.component.html',
  styleUrls: ['./bus-bien-catalogo.component.scss']
})
export class BusBienCatalogoComponent implements OnInit {
  formularioGrp: FormGroup;
  messages = {
    'grupoGenerico': {
      'required': 'Campo obligatorio'
    },
    'claseGenerico': {
      'required': 'Campo obligatorio'
    },
    'nomTipoBien': {
      'required': 'Campo obligatorio'
    },
    'codigoTipoBien': {
      'required': 'Campo obligatorio'
    }
  };
  formErrors = {
    'grupoGenerico': '',
    'claseGenerico': '',
    'nomTipoBien': '',
    'codigoTipoBien': ''
  };

  gruposGenerico: Object[] = [];
  clasesGenerico: Object[] = [];

  listaCatalogo: CatalogoBien[] = [];
  dataSource: MatTableDataSource<CatalogoBien>;
  displayedColumns: string[];
  isLoading: boolean = true;
  columnsGrilla = [
    {
      columnDef: 'codigo',
      header: 'Codigo',
      cell: (cond: CatalogoBien) => `${cond.codigo}`
    }, {
      columnDef: 'denominacion',
      header: 'Denominacion catalogo',
      cell: (cond: CatalogoBien) => `${cond.denominacion}`
    }, {
      columnDef: 'nomGrupoGenerico',
      header: 'grupo',
      cell: (cond: CatalogoBien) => `${cond.nomGrupoGenerico}`
    }, {
      columnDef: 'nomClaseGenerico',
      header: 'Clase',
      cell: (cond: CatalogoBien) => `${cond.nomClaseGenerico}`
    }];


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<BusBienCatalogoComponent>,
    private spinnerService: Ng4LoadingSpinnerService,
    @Inject(MAT_DIALOG_DATA) public data: Object,
    @Inject(ValidationService) private validationService: ValidationService) { }

  ngOnInit() {
    this.formularioGrp = this.fb.group({
      grupoGenerico: ['', []],
      claseGenerico: ['', []],
      nomTipoBien: ['', []],
      codigoTipoBien: ['', []],
    });

    this.formularioGrp.valueChanges.subscribe((val: any) => {
      this.validationService.getValidationErrors(this.formularioGrp, this.messages, this.formErrors, false);
    });

    this.inicializarVariables();
  }

  definirTabla(): void {
    this.displayedColumns = [];
    this.columnsGrilla.forEach(c => {
      this.displayedColumns.push(c.columnDef);
    });
    this.displayedColumns.unshift('id');
  }

  public cargarDatosTabla(): void {
    this.dataSource = null;
    if (this.listaCatalogo.length > 0) {
      this.dataSource = new MatTableDataSource(this.listaCatalogo);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
    this.isLoading = false;
  }

  public inicializarVariables(): void {
    this.comboGrupoGenerico();
    this.comboClaseGenerico();

    this.definirTabla();
    this.buscar();
  }

  comboGrupoGenerico() {
    this.gruposGenerico = JSON.parse(JSON.stringify(gruposGenerico));
    this.gruposGenerico.unshift({ codigo: '00', nombre: 'TODOS' });
    this.formularioGrp.get('grupoGenerico').setValue(this.gruposGenerico[0]);
  }

  comboClaseGenerico() {
    this.clasesGenerico = JSON.parse(JSON.stringify(clasesGenerico));
    this.clasesGenerico.unshift({ codigo: '00', nombre: 'TODOS' });
    this.formularioGrp.get('claseGenerico').setValue(this.clasesGenerico[0]);
  }

  buscar() {
    console.log('buscar');
    let codGrupoGenerico = this.formularioGrp.get('grupoGenerico').value.codigo;
    let codClaseGenerico = this.formularioGrp.get('claseGenerico').value.codigo;
    let codigoTipoBien = this.formularioGrp.get('codigoTipoBien').value;

    console.log(codGrupoGenerico + ' ' + codClaseGenerico);

    this.listaCatalogo = JSON.parse(JSON.stringify(listaCatalogo)).filter(el => (el.codGrupoGenerico == codGrupoGenerico) || ('00' == codGrupoGenerico));
    this.listaCatalogo = this.listaCatalogo.filter(el => (el.codClaseGenerico == codClaseGenerico) || ('00' == codClaseGenerico));

    this.cargarDatosTabla();
  }

  seleccionaTipoBien(obj): void {
    this.dialogRef.close(obj);
  }

}
