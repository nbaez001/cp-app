import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatNativeDateModule,
  MatLineModule,
  MatOptionModule,
  MatRippleModule,
  MatPseudoCheckboxModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatSliderModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  MatPaginatorIntl,
  MAT_SNACK_BAR_DEFAULT_OPTIONS
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ConfirmMessageComponent } from './components/confirm-message/confirm-message.component';
import { PipeModule } from './pipes/pipe.module';
import { MatPaginatorIntlCustom } from './services/paginator-custom-intl.service';
import { UpperCaseDirective } from 'app/protected/modules/ups/modules/expediente/components/directives/upper-case.directive';

@NgModule({
  imports: [
    ReactiveFormsModule,
    PerfectScrollbarModule,
    HttpClientModule,
    FormsModule,
    FlexLayoutModule,
    PipeModule,

    // MATERIAL
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatNativeDateModule,
    MatLineModule,
    MatOptionModule,
    MatRippleModule,
    MatPseudoCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule
  ],
  exports: [
    ReactiveFormsModule,
    PerfectScrollbarModule,
    HttpClientModule,
    FormsModule,
    FlexLayoutModule,
    PipeModule,

    // MATERIAL
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatNativeDateModule,
    MatLineModule,
    MatOptionModule,
    MatRippleModule,
    MatPseudoCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    UpperCaseDirective,
  ],
  declarations: [
    UpperCaseDirective,
    ConfirmMessageComponent
  ],
  entryComponents: [
    ConfirmMessageComponent
  ],
  providers: [
    { provide: MatPaginatorIntl, useClass: MatPaginatorIntlCustom },
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 3000, verticalPosition: 'top', horizontalPosition: 'right' } },
  ]
})
export class SharedModule {}
