import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyResultComponent } from './my-result/my-result.component';
import { MyReviewComponent } from './my-review/my-review.component';
import { MyTestComponent } from './my-test/my-test.component';

const routes: Routes = [
  {
    path:"quiz",
    component: MyTestComponent
  },
  {
    path:"review",
    component: MyReviewComponent
  },
  {
    path:"result",
    component: MyResultComponent
  },
  {
    path:"result/:score",
    component: MyResultComponent
  },
  {
    path:"**",
    redirectTo:"quiz"
  },
  {
    path:"",
    redirectTo:"quiz",
    pathMatch: "full"
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
