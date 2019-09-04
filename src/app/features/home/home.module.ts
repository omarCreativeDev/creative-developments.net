import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { SharedModule } from '../../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, SharedModule, HomeRoutingModule],
})
export class HomeModule {}
