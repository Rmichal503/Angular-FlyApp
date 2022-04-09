import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlyApiComponent } from './components/fly-api/fly-api.component';
import { FlyApiService } from './services/fly-api.service';
import { FlightsPipe } from './pipes/flights.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WeatherApiComponent } from './components/weather-api/weather-api.component';
import { ModalComponent } from './components/modal/modal.component';
import { BoeingComponent } from './components/planes/boeing/boeing.component';
import { AirbusComponent } from './components/planes/airbus/airbus.component';
import { EmbraerComponent } from './components/planes/embraer/embraer.component';

@NgModule({
  declarations: [
    AppComponent,
    FlyApiComponent,
    FlightsPipe,
    WeatherApiComponent,
    ModalComponent,
    BoeingComponent,
    AirbusComponent,
    EmbraerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
  ],
  // entryComponents:[
  //   MymodalComponent
  // ],
  providers: [FlyApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
