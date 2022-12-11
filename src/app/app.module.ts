import { SwiperExampleComponent } from './containers/swiper-example/swiper-example.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LayoutComponent } from './containers/layout/layout.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    ContactComponent,
    SwiperExampleComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SwiperModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
