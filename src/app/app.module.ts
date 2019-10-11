import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { TemplateComponent } from './template/template.component';
import { InventoryComponent } from './inventory/inventory/inventory.component';
import { MetricsComponent } from './metrics/metrics/metrics.component';
import { AlertsComponent } from './alerts/alerts/alerts.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    InventoryComponent,
    MetricsComponent,
    AlertsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
