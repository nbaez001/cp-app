import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatSort, MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { BienPatrimonio } from '../../../entities/bien-patrimonio.model';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ValidationService } from '../../../services/validation.service';
import { BusBienCatalogoComponent } from './bus-bien-catalogo/bus-bien-catalogo.component';
import { formasAdquisicion, estadosAdquisicion } from '../../../data';
import { CatalogoBien } from '../../../entities/catalogo-bien.model';
import { DecimalPipe } from '@angular/common';
import { Adquisicion } from '../../../entities/adquisicion.model';

@Component({
  selector: 'app-reg-adq-individual',
  templateUrl: './reg-adq-individual.component.html',
  styleUrls: ['./reg-adq-individual.component.scss']
})
export class RegAdqIndividualComponent implements OnInit {
  estadosAdquisicion = estadosAdquisicion;

  formularioGrp: FormGroup;
  detFormularioGrp: FormGroup;
  messages = {
    'formaAdquisicion': {
      'required': 'Campo obligatorio'
    },
    'nroDocSustentatorio': {
      'required': 'Campo obligatorio'
    },
    'fechaAdquisicion': {
      'required': 'Campo obligatorio'
    }
  };
  formErrors = {
    'formaAdquisicion': '',
    'nroDocSustentatorio': '',
    'fechaAdquisicion': ''
  };
  messages2 = {
    'codigoBienPatrimonio': {
      'required': 'Campo obligatorio'
    },
    'denBienPatrimonio': {
      'required': 'Campo obligatorio'
    },
    'cantidad': {
      'required': 'Campo obligatorio'
    },
    'valorUnitario': {
      'required': 'Campo obligatorio'
    }
  };
  formErrors2 = {
    'codigoBienPatrimonio': '',
    'denBienPatrimonio': '',
    'cantidad': '',
    'valorUnitario': ''
  };

  catalogo: CatalogoBien;

  listaBienes: BienPatrimonio[] = [];
  dataSource: MatTableDataSource<BienPatrimonio> = null;
  displayedColumns: string[];
  isLoading: boolean = true;
  formasAdquisicion: Object[];
  columnsGrilla = [
    {
      columnDef: 'codPatrimonio',
      header: 'Cod. patrimonial',
      cell: (cond: BienPatrimonio) => `${cond.codPatrimonio}`
    }, {
      columnDef: 'descripcionBien',
      header: 'Denominacion bien',
      cell: (cond: BienPatrimonio) => `${cond.descripcionBien}`
    }, {
      columnDef: 'valorAdquisicion',
      header: 'Valor adquisicion',
      cell: (cond: BienPatrimonio) => `S/. ${this.decimalPipe.transform(cond.valorAdquisicion, '1.2-2')}`
    }];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private fb: FormBuilder,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<RegAdqIndividualComponent>,
    private spinnerService: Ng4LoadingSpinnerService,
    @Inject(MAT_DIALOG_DATA) public data: object,
    @Inject(ValidationService) private validationService: ValidationService,
    private decimalPipe: DecimalPipe) { }

  ngOnInit() {
    this.formularioGrp = this.fb.group({
      formaAdquisicion: ['', [Validators.required]],
      nroDocSustentatorio: ['', [Validators.required]],
      fechaAdquisicion: ['', [Validators.required]],
    });

    this.detFormularioGrp = this.fb.group({
      codigoBienPatrimonio: [{ value: '', disabled: true }, [Validators.required]],
      denBienPatrimonio: [{ value: '', disabled: true }, [Validators.required]],
      cantidad: ['', [Validators.required]],
      valorUnitario: ['', [Validators.required]],
    });

    this.formularioGrp.valueChanges.subscribe((val: any) => {
      this.validationService.getValidationErrors(this.formularioGrp, this.messages, this.formErrors, false);
    });

    this.inicializarVariables();
  }

  public inicializarVariables(): void {
    this.isLoading = false;
    this.definirTabla();
    this.comboFormaAdquisicion();
  }

  comboFormaAdquisicion() {
    this.formasAdquisicion = formasAdquisicion;
    this.formularioGrp.get('formaAdquisicion').setValue(this.formasAdquisicion[0]);
  }

  definirTabla(): void {
    this.displayedColumns = [];
    this.columnsGrilla.forEach(c => {
      this.displayedColumns.push(c.columnDef);
    });
    this.displayedColumns.unshift('id');
    this.displayedColumns.push('opt');
  }

  public cargarDatosTabla(): void {
    this.dataSource = null;
    if (this.listaBienes.length > 0) {
      this.dataSource = new MatTableDataSource(this.listaBienes);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
    this.isLoading = false;
  }

  agregarDetalle() {
    if (this.detFormularioGrp.valid) {
      let codigoUltimo = 233;
      let cant = this.detFormularioGrp.get('cantidad').value;
      for (let i = 0; i < cant; i++) {
        let detPatrimonio = new BienPatrimonio();
        detPatrimonio.codPatrimonio = this.catalogo.codigo + (codigoUltimo + '').padStart(4, "0");
        detPatrimonio.descripcionBien = this.detFormularioGrp.get('denBienPatrimonio').value;
        detPatrimonio.valorAdquisicion = this.detFormularioGrp.get('valorUnitario').value;
        codigoUltimo++;

        this.listaBienes.push(detPatrimonio);
      }
      this.catalogo = null;
      this.validationService.clearForm(this.detFormularioGrp);
      this.validationService.setAsUntoched(this.detFormularioGrp);

      this.cargarDatosTabla();
    } else {
      this.validationService.getValidationErrors(this.detFormularioGrp, this.messages2, this.formErrors2, true);
    }
  }

  guardar(): void {
    if (this.formularioGrp.valid) {
      if (this.listaBienes.length > 0) {
        let mae = new Adquisicion();
        mae.id = 0;
        mae.idFormaAdquisicion = this.formularioGrp.get('formaAdquisicion').value.id;
        mae.nomFormaAdquisicion = this.formularioGrp.get('formaAdquisicion').value.nombre;
        mae.nroDocSustentatorio = this.formularioGrp.get('nroDocSustentatorio').value;
        mae.fecha = this.formularioGrp.get('fechaAdquisicion').value;
        mae.idEstado = this.estadosAdquisicion[0].id;
        mae.nomEstado = this.estadosAdquisicion[0].nombre;
        mae.totalBienes = this.listaBienes.length;

        this.dialogRef.close(mae);
      } else {
        console.log('agregar detalle')
      }
    } else {
      this.validationService.getValidationErrors(this.formularioGrp, this.messages, this.formErrors, true);
    }
  }

  delBienPatrimonio(obj): void {
    let index = this.listaBienes.indexOf(obj);
    this.listaBienes.splice(index, 1);

    this.cargarDatosTabla();
  }

  buscarCatalogo() {
    if (this.formularioGrp.valid) {
      const dialogRef = this.dialog.open(BusBienCatalogoComponent, {
        width: '800px',
        data: null
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.catalogo = result;
          this.detFormularioGrp.get('codigoBienPatrimonio').setValue(this.catalogo.codigo);
          this.detFormularioGrp.get('denBienPatrimonio').setValue(this.catalogo.denominacion);
        }
      });
    } else {
      this.validationService.getValidationErrors(this.formularioGrp, this.messages, this.formErrors, true);
    }
  }

}
