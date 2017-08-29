import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {Routes, RouterModule} from '@angular/router';
import { HttpModule }   from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';

const appRoutes: Routes =[
         {
            path: "",
            redirectTo: "home",
            pathMatch: "full"
        },
    { path: 'home', component: HomeComponent},
    { path: 'students', component: StudentsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    StudentsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
