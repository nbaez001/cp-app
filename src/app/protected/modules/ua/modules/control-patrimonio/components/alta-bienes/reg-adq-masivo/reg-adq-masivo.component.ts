import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-reg-adq-masivo',
  templateUrl: './reg-adq-masivo.component.html',
  styleUrls: ['./reg-adq-masivo.component.scss']
})
export class RegAdqMasivoComponent implements OnInit {
  formularioGrp: FormGroup;
  fileupload: any;
  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<RegAdqMasivoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, ) { }

  ngOnInit() {
    this.formularioGrp = this.fb.group({
      cargaMasiva: [{ value: '', disabled: true }, [Validators.required]],
    });
  }

  public buscarActa(evt): void {
    document.getElementById('fileCargaMasiva').click();
  }

  public cargarArchivo(event) {// NO SIRVE POR QUE NO DEBE SUBIRSE EL ARCHIVO INMEDIATAMENTE
    this.fileupload = event.target.files[0];
    if (typeof event === 'undefined' || typeof this.fileupload === 'undefined' || typeof this.fileupload.name === 'undefined') {
      this.formularioGrp.get('cargaMasiva').setValue(null);
    } else {
      const nombreArchivo = this.fileupload.name;
      this.formularioGrp.get('cargaMasiva').setValue(nombreArchivo);
    }
  }
}
