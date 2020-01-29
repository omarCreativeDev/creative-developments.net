import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { NgxMasonryModule } from 'ngx-masonry';
import { PortfolioRoutingModule } from '@features/portfolio/portfolio-routing.module';
import { PortfolioPageComponent } from '@features/portfolio/pages/portfolio-page/portfolio-page.component';
import { PortfolioItemsComponent } from './components/portfolio-items/portfolio-items.component';

@NgModule({
  declarations: [PortfolioPageComponent, PortfolioItemsComponent],
  imports: [CommonModule, SharedModule, PortfolioRoutingModule, NgxMasonryModule],
})
export class PortfolioModule {}
