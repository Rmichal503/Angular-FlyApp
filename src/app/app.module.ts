import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

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
import { WeatherOriginComponent } from './components/weather-origin/weather-origin.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';

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
    WeatherOriginComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgxBootstrapIconsModule.pick(allIcons, {
      width: '2em',
      height: '2em',
    })
  ],
  // entryComponents:[
  //   MymodalComponent
  // ],
  providers: [FlyApiService,
    NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
