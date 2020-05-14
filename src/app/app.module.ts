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
import { BrainstormingComponent } from './pages/brainstorming/brainstorming.component';
import { SelectImagesComponent } from './pages/select-images/select-images.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalCountdownComponent } from './components/modal-countdown/modal-countdown.component';
import { ModalWordsComponent } from './components/modal-words/modal-words.component';
@NgModule({
  declarations: [
    AppComponent,
    PreHomeComponent,
    EndComponent,
    BrainstormingComponent,
    SelectImagesComponent,
    ModalCountdownComponent,
    ModalWordsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    NgbModule,
    DeviceDetectorModule.forRoot(),
    CarouselModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
