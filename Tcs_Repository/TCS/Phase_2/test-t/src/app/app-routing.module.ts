import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrackCompComponent } from './track-comp/track-comp.component';

const routes: Routes = [
  {
    path:"tblRoute",
    component:TrackCompComponent,
    //data:{me:"hello",you:22}
  },
  {
    path:"",
    redirectTo:"/tblRoute",
    pathMatch: "full"
  },
  {
    path:"**",
    redirectTo:"/tblRoute"
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
