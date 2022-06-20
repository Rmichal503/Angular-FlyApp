import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localePl from '@angular/common/locales/pl'
registerLocaleData(localePl)

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlyApiComponent } from './components/fly-api/fly-api.component';
import { FlyApiService } from './services/fly-api.service';
import { FlightsPipe } from './pipes/flights.pipe';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WeatherApiComponent } from './components/weather-api/weather-api.component';
import { ModalComponent } from './components/modal/modal.component';
import { BoeingComponent } from './components/planes/boeing/boeing.component';
import { AirbusComponent } from './components/planes/airbus/airbus.component';
import { EmbraerComponent } from './components/planes/embraer/embraer.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SumUpComponent } from './components/sum-up/sum-up.component';
import { TypeOfSeatsPipe} from './pipes/type-of-seats.pipe';

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
    LoginComponent,
    NavbarComponent,
    SumUpComponent,
    TypeOfSeatsPipe,
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
  providers: [FlyApiService,
    NgbActiveModal, {provide: LOCALE_ID, useValue: 'pl-PL'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
