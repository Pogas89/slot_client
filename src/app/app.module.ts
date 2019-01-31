import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule, MatTableModule, MatCheckboxModule, MatRadioModule, MatSelectModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

import { AppComponent } from './app.component';
import { SlotroomsComponent } from './slotrooms/slotrooms.component';
import { SlotroomEditComponent } from './slotroom-edit/slotroom-edit.component';

import { AppRoutingModule } from './app-routing.module';
import { SlotmachinesComponent } from './slotmachines/slotmachines.component';
import { SlotroomAddComponent } from './slotroom-add/slotroom-add.component';
import { SlotmachineAddComponent } from './slotmachine-add/slotmachine-add.component';
import { SlotmachineEditComponent } from './slotmachine-edit/slotmachine-edit.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { httpInterceptorProviders } from './auth/auth-interceptor';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    SlotroomsComponent,
    SlotroomEditComponent,
    SlotmachinesComponent,
    SlotroomAddComponent,
    SlotmachineAddComponent,
    SlotmachineEditComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatButtonModule, 
    MatCardModule, 
    MatInputModule, 
    MatListModule, 
    MatToolbarModule,
    MatTableModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    BrowserAnimationsModule,
    Ng4LoadingSpinnerModule.forRoot()
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
