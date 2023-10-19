import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { routes } from './app.router';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';

import { CoursesComponent } from './courses/courses.component';

import { ContactComponent } from './contact/contact.component';

import { RegistrationComponent } from './registration/registration.component';

import { GalleryComponent } from './gallery/gallery.component';


import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';



 

@NgModule({

  declarations: [
    AppComponent,
    ContactComponent,
    CoursesComponent,
    GalleryComponent,
    RegistrationComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent],
  

  imports: [

    BrowserModule,ReactiveFormsModule,
    routes,
    AppRoutingModule

  ],

  providers: [],

  bootstrap: [AppComponent]

})

export class AppModule { }
