import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMaskModule } from 'ngx-mask';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { SwiperModule } from 'swiper/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CommonQuestionsComponent } from './landing-page/common-questions/common-questions.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CardSwiperComponent } from './landing-page/card-swiper/card-swiper.component';
import { SubWithusComponent } from './landing-page/sub-withus/sub-withus.component';
import { CardInfoComponent } from './landing-page/card-info/card-info.component';
import { ImportantImageComponent } from './landing-page/important-image/important-image.component';
import { GalleryViewComponent } from './landing-page/gallery-view/gallery-view.component';
import { WhyPhotographComponent } from './landing-page/why-photograph/why-photograph.component';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    LandingPageComponent,
    CommonQuestionsComponent,
    FooterComponent,
    CardSwiperComponent,
    SubWithusComponent,
    CardInfoComponent,
    ImportantImageComponent,
    GalleryViewComponent,
    WhyPhotographComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SwiperModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    ToastrModule.forRoot(),
    NgxPageScrollCoreModule,
    NgxPageScrollModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
