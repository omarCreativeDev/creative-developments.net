import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '@shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'about-me',
    loadChildren: () => import('./features/about-me/about-me.module').then((m) => m.AboutMeModule),
  },
  {
    path: 'my-skills',
    loadChildren: () => import('./features/my-skills/my-skills.module').then((m) => m.MySkillsModule),
  },
  {
    path: 'portfolio',
    loadChildren: () => import('./features/portfolio/portfolio.module').then((m) => m.PortfolioModule),
  },
  {
    path: 'contact-me',
    loadChildren: () => import('./features/contact-me/contact-me.module').then((m) => m.ContactMeModule),
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'reload',
      paramsInheritanceStrategy: 'always',
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
