import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { GoogleMapsModule } from '@angular/google-maps';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialModule } from './material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { DatosComponent } from './pages/datos/datos.component';
import { TranscounterTableComponent } from './components/transcounter-table/transcounter-table.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { ProductSalesChartComponent } from './components/charts/product-sales-chart/product-sales-chart.component';
import { SalesTrafficChartComponent } from './components/charts/sales-traffic-chart/sales-traffic-chart.component';
import { AnnualSalesChartComponent } from './components/charts/annual-sales-chart/annual-sales-chart.component';
import { StoreSessionsChartComponent } from './components/charts/store-sessions-chart/store-sessions-chart.component';
import { CardComponent } from './components/card/card.component';
import { MiniCardComponent } from './components/mini-card/mini-card.component';



@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidenavComponent,
    FormularioComponent,
    DatosComponent,
    TranscounterTableComponent,
    DashboardComponent,
    MapaComponent,
    ProductSalesChartComponent,
    SalesTrafficChartComponent,
    AnnualSalesChartComponent,
    StoreSessionsChartComponent,
    CardComponent,
    MiniCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ChartsModule,
    GoogleMapsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
