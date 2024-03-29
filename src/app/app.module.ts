import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { NotFoundModule } from './notFound/notFound.module';
import { HeroesModule } from './heroes/heroes.module';
import { PhonesModule } from './phones/phones.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './home/home.module';
import { DemoAppModule } from './demo-app/demo-app.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
   ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    DashboardModule,
    HeroesModule,
    PhonesModule,
    NotFoundModule,
    DemoAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
