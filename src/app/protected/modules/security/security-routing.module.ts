import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthRouting } from '@shared/auth/auth-routing';
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [
  {
    path: 'menus',
    component: MenuComponent,
    canActivate: [AuthRouting]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
