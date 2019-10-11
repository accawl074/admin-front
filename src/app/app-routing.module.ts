import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryComponent } from './inventory/inventory/inventory.component';
import { MetricsComponent } from './metrics/metrics/metrics.component';
import { AlertsComponent } from './alerts/alerts/alerts.component';

const routes: Routes = [
  {path: '',  pathMatch: 'full',  redirectTo: 'login'},
  {path: 'Inventory', component: InventoryComponent},
  {path: 'Metrics', component: MetricsComponent},
  {path: 'Alerts', component: AlertsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
