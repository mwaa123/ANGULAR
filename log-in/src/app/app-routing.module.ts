import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignComponent } from './sign/sign.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path:'', redirectTo:'/sign', pathMatch:'full'},
  { path: 'sign', component: SignComponent},
  { path: 'signup', component: SignupComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[ SignComponent,SignupComponent]