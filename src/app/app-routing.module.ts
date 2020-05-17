import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'
import {PreHomeComponent} from './pages/pre-home/pre-home.component'
import {EndComponent} from './pages/end/end.component'
import {BrainstormingComponent} from './pages/brainstorming/brainstorming.component'
import {SelectImagesComponent} from './pages/select-images/select-images.component'
import {BrainstormingDemoComponent} from './pages/brainstorming-demo/brainstorming-demo.component'
import {BrainstormingIntroComponent} from './pages/brainstorming-intro/brainstorming-intro.component'
import {PlayBrainstormingComponent} from './pages/play-brainstorming/play-brainstorming.component'
import {ChooseWordsComponent} from './pages/choose-words/choose-words.component'
import {QuestionsComponent} from './pages/questions/questions.component'


const routes: Routes = [
  {
    path: '',
    component: PreHomeComponent,
  },
  {
    path: 'lluvia-de-ideas',
    component: BrainstormingComponent,
  },
  {
    path: 'lluvia-de-ideas/demo',
    component: BrainstormingDemoComponent,
  },
  {
    path: 'lluvia-de-ideas/introduccion',
    component: BrainstormingIntroComponent
  },
  {
    path: 'lluvia-de-ideas/introduccion/:id',
    component: BrainstormingIntroComponent
  },
  {
    path: 'lluvia-de-ideas/iniciar/:id',
    component: PlayBrainstormingComponent
  },
  {
    path: 'lluvia-de-ideas/escoger-palabras/:id',
    component: ChooseWordsComponent
  },
  {
    path: 'lluvia-de-ideas/preguntas/:id',
    component: QuestionsComponent
  },
  {
    path: 'seleccion-de-imagenes',
    component: SelectImagesComponent,
  },
  {
    path: 'end',
    component: EndComponent,
  },
  {path: '**', redirectTo: '/'}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
