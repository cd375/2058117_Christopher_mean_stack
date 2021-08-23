import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoTrackComponent } from './to-do-track/to-do-track.component';


const routes: Routes = [
  {
    path:"",
    redirectTo:"/makeTbl",
    pathMatch: "full"
  },
  {
    path: "makeTbl",
    component: ToDoTrackComponent,

  },
  {
    path:"**",
    redirectTo:"/makeTbl",
    
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
