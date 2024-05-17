import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './COMPONENTS/home/home.component';
import { AboutComponent } from './COMPONENTS/about/about.component';
import { ContactComponent } from './COMPONENTS/contact/contact.component';
import { ServiceComponent } from './COMPONENTS/service/service.component';
import { FooterComponent } from './COMPONENTS/footer/footer.component';
import { HeaderComponent } from './COMPONENTS/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ServiceComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
