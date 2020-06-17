import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BeerOverviewComponent} from './components/beer-overview/beer-overview.component';
import {BeersComponent} from './components/beers/beers.component';


const routes: Routes = [
  {path: 'beers', component: BeersComponent},
  {path: 'beers/:id', component: BeerOverviewComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
