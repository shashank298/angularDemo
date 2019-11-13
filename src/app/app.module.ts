

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import{FormsModule} from "@angular/forms";
  import { from } from 'rxjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
