import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { MainComponent } from './views/main/main.component';
import { FeaturedComponent } from './views/featured/featured.component';
import { ContentComponent } from './views/content/content.component';
import { TrainingComponent } from './views/featured/featured-more/training/training.component';
import { CoursesComponent } from './views/featured/courses/courses.component';
import { SubscriptionComponent } from './views/featured/subscription/subscription.component';
import { SecretGuestComponent } from './views/featured/secret-guest/secret-guest.component';
import { WorkComponent } from './views/work/work.component';
import { MakeComponent } from './views/work/make/make.component';
import { ProcessComponent } from './views/process/process.component';
import { ResultsComponent } from './views/results/results.component';
import { SliderComponent } from './views/slider/slider.component';
import { SwiperModule } from 'swiper/angular';
import { PostComponent } from './views/post/post.component';
import { BurgerComponent } from './shared/layout/burger/burger.component';



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    FeaturedComponent,
    ContentComponent,
    TrainingComponent,
    CoursesComponent,
    SubscriptionComponent,
    SecretGuestComponent,
    WorkComponent,
    MakeComponent,
    ProcessComponent,
    ResultsComponent,
    SliderComponent,
    PostComponent,
    BurgerComponent
  ],
  imports: [
    BrowserModule,
    SwiperModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
