import { NgModule } from "@angular/core";
import { RouterModule,Routes } from '@angular/router';
import { NaveenComponent } from "./naveen/naveen.component";
import { VinayComponent } from "./vinay/vinay.component";
import { SriComponent } from "./sri/sri.component";

const appRoutes: Routes = [
    { path: 'naveen', component: NaveenComponent },
    { path: 'vinay', component: VinayComponent },
    { path: 'srinath', component: SriComponent },
   
    { path: '',
      redirectTo: 'naveen',
      pathMatch: 'full'
    }
  ];
  
  @NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
     )
    ],
  })
export class AppRoutingModule {

}   