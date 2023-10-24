import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// modules
import { MaterialModule } from '../material/material-module';
// components
import { AboutComponent } from './components/about/about.component';
// routing
import { AboutRoutingModule } from './about-routing-module';


@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    MaterialModule
  ],
  exports: [
    AboutComponent
  ],
})
export class AboutModule { }