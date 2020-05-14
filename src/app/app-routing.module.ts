import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PreHomeComponent} from "./pages/pre-home/pre-home.component";
import {EndComponent} from "./pages/end/end.component";
import {BrainstormingComponent} from "./pages/brainstorming/brainstorming.component";
import {SelectImagesComponent} from "./pages/select-images/select-images.component";


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
    path: 'seleccion-de-imagenes',
    component: SelectImagesComponent,
  },
  {
    path: 'end',
    component: EndComponent,
  },
];

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
