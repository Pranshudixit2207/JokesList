import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { JokesModuleModule } from './jokes-module/jokes-module.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { JokesApiService } from './jokes-api.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JokesModuleModule,
    HttpClientModule
  ],
  providers: [
    JokesApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
