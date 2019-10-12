import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { PortfolioRoutingModule } from '@features/portfolio/portfolio-routing.module';
import { PortfolioPageComponent } from '@features/portfolio/pages/portfolio-page/portfolio-page.component';

@NgModule({
  declarations: [PortfolioPageComponent],
  imports: [CommonModule, SharedModule, PortfolioRoutingModule],
})
export class PortfolioModule {}
