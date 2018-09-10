import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';

import { AppComponent } from './app.component';
import { DossiersComponent } from './dossiers/components/dossiers/dossiers.component';
import { AppRoutingModule } from './app-routing.module';
import { DossierComponent } from './dossiers/components/dossier/dossier.component';

@NgModule({
  declarations: [
    AppComponent,
    DossiersComponent,
    DossierComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TableModule,
    PaginatorModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
