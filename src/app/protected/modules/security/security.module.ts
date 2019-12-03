import { NgModule } from '@angular/core';
import { SecurityRoutingModule } from './security-routing.module';
import { SharedModule } from '@shared/shared.module';
import { MenuComponent } from './components/menu/menu.component';
import { MenuService } from './services/menu.service';
import { MenuFormComponent } from './components/menu/menu-form/menu-form.component';

@NgModule({
  declarations: [
    MenuComponent,
    MenuFormComponent
  ],
  entryComponents: [
    MenuFormComponent
  ],
  imports: [
    SecurityRoutingModule,
    SharedModule
  ],
  providers: [
    MenuService
  ]
})
export class SecurityModule { }
