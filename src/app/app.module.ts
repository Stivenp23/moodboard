import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import { PreHomeComponent } from './pages/pre-home/pre-home.component';
import { EndComponent } from './pages/end/end.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DeviceDetectorModule } from 'ngx-device-detector';
@NgModule({
  declarations: [
    AppComponent,
    PreHomeComponent,
    EndComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    NgbModule,
    DeviceDetectorModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
