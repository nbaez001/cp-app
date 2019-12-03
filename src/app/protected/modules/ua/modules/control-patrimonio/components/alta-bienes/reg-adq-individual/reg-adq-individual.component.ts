import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatSort, MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { BienPatrimonio } from '../../../entities/bien-patrimonio.model';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ValidationService } from '../../../services/validation.service';
import { BusBienCatalogoComponent } from './bus-bien-catalogo/bus-bien-catalogo.component';

@Component({
  selector: 'app-reg-adq-individual',
  templateUrl: './reg-adq-individual.component.html',
  styleUrls: ['./reg-adq-individual.component.scss']
})
export class RegAdqIndividualComponent implements OnInit {
  formularioGrp: FormGroup;
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

  listaBienes: BienPatrimonio[] = [];
  dataSource: MatTableDataSource<BienPatrimonio>;
  displayedColumns: string[];
  isLoading: boolean = true;
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
      cell: (cond: BienPatrimonio) => `${cond.valorAdquisicion}`
    }];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private fb: FormBuilder,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<RegAdqIndividualComponent>,
    private spinnerService: Ng4LoadingSpinnerService,
    @Inject(MAT_DIALOG_DATA) public data: object,
    @Inject(ValidationService) private validationService: ValidationService) { }

  ngOnInit() {
    this.formularioGrp = this.fb.group({
      formaAdquisicion: ['', [Validators.required]],
      nroDocSustentatorio: ['', [Validators.required]],
      fechaAdquisicion: ['', [Validators.required]],
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

  public inicializarVariables(): void {
    this.definirTabla();
    this.cargarDatosTabla();
  }

  guardar(): void {
    if (this.formularioGrp.valid) {
      // let mae = new BienPatrimonio();
      // mae.id = 0;
      // mae.nombres = this.conductorGrp.get('nombres').value;
      // mae.apellidos = this.conductorGrp.get('apellidos').value;
      // mae.nroBrevete = this.conductorGrp.get('nroBrevete').value;
      // mae.iniVigenciaBrevete = this.conductorGrp.get('iniVigenciaBrevete').value;
      // mae.finVigenciaBrevete = this.conductorGrp.get('finVigenciaBrevete').value;

      // console.log(mae);
      // this.listarMaestra(mae);
      // this.limpiar();
      console.log('valido');
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
    const dialogRef = this.dialog.open(BusBienCatalogoComponent, {
      width: '800px',
      data: null
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

}
