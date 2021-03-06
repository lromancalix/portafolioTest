import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { ItemComponent } from './pages/item/item.component';
import { SeachComponent } from './pages/seach/seach.component';


const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'portafolio',
    component: PortafolioComponent
  },
  {
    path: 'item/:id',
    component: ItemComponent
  },
  {
    path: 'home',
    component: PortafolioComponent
  },
  {
    path: 'buscar/:termino',
    component: SeachComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
