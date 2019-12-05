import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsiveRowsDirective } from '../directives/upper-case.directive';
import { UpperCaseDirective } from '../../ups/modules/expediente/components/directives/upper-case.directive';

@NgModule({
  declarations: [
    ResponsiveRowsDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ResponsiveRowsDirective,
  ]
})
export class SharedModulesUaModule { }
