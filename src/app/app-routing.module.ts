import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PreHomeComponent} from "./pages/pre-home/pre-home.component";
import {EndComponent} from "./pages/end/end.component";


const routes: Routes = [
  {
    path: '',
    component: PreHomeComponent,
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
