import { PostDetailsComponent } from './post-details/post-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CityComponent } from './city/city.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LandingPageComponent } from './landing-page/landing-page.component';


const routes: Routes = [

  {
    
    path: '',pathMatch: 'full',
    component: LandingPageComponent,
    
  },
  {
    path:'cities/:cid',
    component: HomepageComponent,
    children: [
      {
        path:"posts/:pid",
        component:PostDetailsComponent 
      },
      {
        path:"posts",
        component:PostComponent
      },
      { 
       path: '**',
       component: PageNotFoundComponent
       
     },
    ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const ArrayOfComponents = [PostDetailsComponent, PostComponent];