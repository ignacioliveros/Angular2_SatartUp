import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{AppRoutingModule}from'./app-routing.module';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import{HomeComponent} from './home/home.component';
import{AboutUs} from './aboutUs/aboutUs.component';
import{AboutService} from './aboutUs/aboutUs-service/aboutUs.service'


@NgModule({
    imports: [BrowserModule,AppRoutingModule,HttpModule],
    declarations: [AppComponent,HomeComponent,AboutUs],
    providers:[AboutService],
    bootstrap: [AppComponent]
})

export class AppModule { }