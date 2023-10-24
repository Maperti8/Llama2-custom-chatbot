import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// imported modules
import { AboutModule } from './modules/about-module/about-module.module';
import { MaterialModule } from './modules/material/material-module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// eager laoded components
import { HomeComponent } from './home/components/home/home.component';
// init token service 
import { AppInitService } from './init';

export function initializeApp(appInitService: AppInitService) {
  return (): Promise<any> => { 
    return appInitService.Init();
  }
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    AboutModule,
  ],
  providers: [
    AppInitService,
    { provide: APP_INITIALIZER,useFactory: initializeApp, 
      deps: [AppInitService], 
      multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
