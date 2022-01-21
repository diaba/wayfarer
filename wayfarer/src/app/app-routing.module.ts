import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CityComponent } from './city/city.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: NavbarComponent,
  // },
  {
    path: 'cities/:id',
    component: CityComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
