import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { ShowInspeccionComponent } from './contenedores/inspeccion/show-inspeccion/show-inspeccion.component';
import { AddEditInspeccionComponent } from './contenedores/inspeccion/add-edit-inspeccion/add-edit-inspeccion.component';
import { InspeccionComponent } from './contenedores/inspeccion/inspeccion/inspeccion.component';
import { ShowTipoinspeccionComponent } from './contenedores/tipoinspeccion/show-tipoinspeccion/show-tipoinspeccion.component';
import { AddEditTipoinspeccionComponent } from './contenedores/tipoinspeccion/add-edit-tipoinspeccion/add-edit-tipoinspeccion.component';
import { TipoinspeccionComponent } from './contenedores/tipoinspeccion/tipoinspeccion/tipoinspeccion.component';
import { AddEditEstadoComponent } from './contenedores/estado/add-edit-estado/add-edit-estado.component';
import { ShowEstadoComponent } from './contenedores/estado/show-estado/show-estado.component';
import { EstadoComponent } from './contenedores/estado/estado/estado.component';

import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './contenedores/navbar/navbar.component';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

//Rutas
const routes: Routes = [
    {path: 'listarinspecciones', component: ShowInspeccionComponent },
    {path: 'listartipos', component: ShowTipoinspeccionComponent },
    {path: 'listarestados', component: ShowEstadoComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    ShowInspeccionComponent,
    AddEditInspeccionComponent,
    InspeccionComponent,
    ShowTipoinspeccionComponent,
    AddEditTipoinspeccionComponent,
    TipoinspeccionComponent,
    AddEditEstadoComponent,
    ShowEstadoComponent,
    EstadoComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
