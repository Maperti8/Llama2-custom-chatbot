import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/components/home/home.component';

const routes: Routes = [
  // eager loaded components
  { path: '', redirectTo: 'chatbot', pathMatch: 'full'},
  { path: 'chatbot', component: HomeComponent },
  // lazy loaded modules
  { path: 'about', loadChildren: () => import('./modules/about-module/about-module.module').then(m => m.AboutModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
