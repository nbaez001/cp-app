import { NgModule } from '@angular/core';
import { ProtectedComponent } from './protected.component';
import { ProtectedRoutingModule } from './protected-routing.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { AuthService } from './services/auth.service';
import { environment } from 'environments/environment';
import { ChatService } from './modules/chat/services/chat.service';
import { SocketIoModule } from 'ng-socket-io';
import { LockComponent } from './modules/chat/components/lock/lock.component';
import {
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatSidenavModule,
  MatButtonModule,
  MatTreeModule,
  MatIconModule,
  MatTooltipModule,
  MatMenuModule,
  MatDialogModule,
  MatProgressBarModule
} from '@angular/material';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from '@shared/auth/auth.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { LoadingModule } from '@shared/loading/loading.module';
import { UpperCaseDirective } from './modules/ups/modules/expediente/components/directives/upper-case.directive';

@NgModule({
  declarations: [
    ProtectedComponent,
    NotFoundComponent,
    HomeComponent,
    NavbarComponent,
    ToolbarComponent,
    // TODO: POR REFACTORIZAR
    LockComponent,
  ],
  imports: [
    ProtectedRoutingModule,
    CommonModule,
    HttpClientModule,
    SocketIoModule.forRoot({url: environment.serverWebSocket}),
    AuthModule.forRoot(),
    LoadingModule.forRoot(),

    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSidenavModule,
    MatButtonModule,
    MatTreeModule,
    MatIconModule,
    MatTooltipModule,
    MatMenuModule,
    MatDialogModule,
    MatTooltipModule,
    MatProgressBarModule
  ],
  providers: [
    AuthService,
    ChatService
  ],
  entryComponents: [
    LockComponent
  ]
})
export class ProtectedModule { }
