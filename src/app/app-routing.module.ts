import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlyApiComponent } from './components/fly-api/fly-api.component';
import { AboutUsComponent } from './components/navbarCards/about-us/about-us.component';
import { FAQComponent } from './components/navbarCards/faq/faq.component';
import { FeaturesComponent } from './components/navbarCards/features/features.component';

const routes: Routes = [
  {path: '', component:FlyApiComponent},
  {path: 'faq', component:FAQComponent},
  {path: 'about', component:AboutUsComponent},
  {path: 'features', component:FeaturesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
