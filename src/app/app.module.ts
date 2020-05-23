import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {ServiceWorkerModule} from '@angular/service-worker'
import {environment} from '../environments/environment'
import {PreHomeComponent} from './pages/pre-home/pre-home.component'
import {EndComponent} from './pages/end/end.component'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import {DeviceDetectorModule} from 'ngx-device-detector'
import {BrainstormingComponent} from './pages/brainstorming/brainstorming.component'
import {SelectImagesComponent} from './pages/select-images/select-images.component'
import {CarouselModule} from 'ngx-owl-carousel-o'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {ModalCountdownComponent} from './components/modal-countdown/modal-countdown.component'
import {ModalWordsComponent} from './components/modal-words/modal-words.component'
import {BrainstormingDemoComponent} from './pages/brainstorming-demo/brainstorming-demo.component'
import {WriteWordsComponent} from './components/write-words/write-words.component'
import {CounterDirective} from './directives/counter.directive'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { ModalNumberWordsComponent } from './components/modal-number-words/modal-number-words.component';
import { BrainstormingIntroComponent } from './pages/brainstorming-intro/brainstorming-intro.component';
import { PlayBrainstormingComponent } from './pages/play-brainstorming/play-brainstorming.component';
import { ChooseWordsComponent } from './pages/choose-words/choose-words.component';
import { QuestionsComponent } from './pages/questions/questions.component';
import { VisualizeKeyConceptsComponent } from './pages/visualize-key-concepts/visualize-key-concepts.component'

@NgModule({
  declarations: [
    AppComponent,
    PreHomeComponent,
    EndComponent,
    BrainstormingComponent,
    SelectImagesComponent,
    ModalCountdownComponent,
    ModalWordsComponent,
    BrainstormingDemoComponent,
    WriteWordsComponent,
    CounterDirective,
    ModalNumberWordsComponent,
    BrainstormingIntroComponent,
    PlayBrainstormingComponent,
    ChooseWordsComponent,
    QuestionsComponent,
    VisualizeKeyConceptsComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
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
