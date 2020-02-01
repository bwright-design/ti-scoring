import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TwilightImperiumComponent } from "./games/twilight-imperium/twilight-imperium.component";


const routes: Routes = [
    {
        path:"ti",
        component: TwilightImperiumComponent,
        data: { pageTitle: "Twilight Imperium" }
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
