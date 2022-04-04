import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlyApiComponent } from './components/fly-api/fly-api.component';
import { FlyApiService } from './services/fly-api.service';
import { FlightsPipe } from './pipes/flights.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FlyApiComponent,
    FlightsPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [FlyApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
