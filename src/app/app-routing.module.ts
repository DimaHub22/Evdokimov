import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "./shared/layout/layout.component";
import {ContentComponent} from "./views/content/content.component";
import {TrainingComponent} from "./views/featured/featured-more/training/training.component";
import {CoursesComponent} from "./views/featured/courses/courses.component";
import {SubscriptionComponent} from "./views/featured/subscription/subscription.component";
import {SecretGuestComponent} from "./views/featured/secret-guest/secret-guest.component";
import {MakeComponent} from "./views/work/make/make.component";


const routes: Routes = [
  {path: '', component: LayoutComponent,children:[
      {path:'',component: ContentComponent},
      {path:'training', component: TrainingComponent},
      {path:'courses', component: CoursesComponent},
      {path:'subscription',component: SubscriptionComponent},
      {path:'secret-guest',component: SecretGuestComponent},
      {path:'make',component: MakeComponent},
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
