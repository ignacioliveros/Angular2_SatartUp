import { NgModule }     from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {AboutUs} from './aboutUs/aboutUs.component'

const routes: Routes = [
{path:'',redirectTo:'/home',pathMatch:'full'},
{path:'home', component:HomeComponent},
{path:'aboutUs', component:AboutUs}
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [ ]
})
export class AppRoutingModule {}