import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BeerService} from "./services/beer.service";
import {HttpClientModule} from "@angular/common/http";
import {BeerOverviewComponent} from './components/beer-overview/beer-overview.component';
import { BeersComponent } from './components/beers/beers.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSelectModule} from "@angular/material/select";
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    BeerOverviewComponent,
    BeersComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule,
    MatToolbarModule,
    MatSelectModule,

  ],
  providers: [BeerService],
  bootstrap: [AppComponent],
  exports: [HttpClientModule]
})
export class AppModule {
}
