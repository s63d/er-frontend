import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';

import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import {tokenGetter} from './services/auth.service';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:8081', 'localhost:8080', 'localhost:8082'],
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
