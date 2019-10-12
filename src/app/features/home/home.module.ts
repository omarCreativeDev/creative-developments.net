import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '@shared/shared.module';
import { IntroComponent } from './components/intro/intro.component';
import { FeaturedWorkComponent } from './components/featured-work/featured-work.component';
import { ThingsIDoComponent } from './components/things-i-do/things-i-do.component';
import { ClientFeedbackComponent } from './components/client-feedback/client-feedback.component';

@NgModule({
  declarations: [HomePageComponent, IntroComponent, FeaturedWorkComponent, ThingsIDoComponent, ClientFeedbackComponent],
  imports: [CommonModule, SharedModule, HomeRoutingModule],
})
export class HomeModule {}
