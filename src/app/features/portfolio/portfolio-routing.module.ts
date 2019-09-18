import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PortfolioPageComponent } from '@features/portfolio/portfolio-page/portfolio-page.component';

const routes: Routes = [{ path: '', component: PortfolioPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortfolioRoutingModule {}
