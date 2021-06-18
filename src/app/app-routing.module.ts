import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusDashboardComponent } from './pages/bus-dashboard/bus-dashboard.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DatosComponent } from './pages/datos/datos.component';
import { FormularioComponent } from './pages/formulario/formulario.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'bus-dashboard/:id', component: BusDashboardComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'datos', component: DatosComponent },
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
