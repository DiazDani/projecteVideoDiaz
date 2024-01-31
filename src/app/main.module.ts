// main.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ActivitatComponent } from './activitat/activitat.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ActivitatComponent,
    // Otros componentes
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // Otros módulos
  ],
  bootstrap: [AppComponent],
})
export class MainModule {}
