import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {NgOptimizedImage} from "@angular/common";
import {MatBadge} from "@angular/material/badge";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormField,
    MatLabel,
    MatSlideToggle,
    MatInputModule,
    FormsModule,
    MatButton,
    MatIcon,
    MatGridList,
    MatGridTile,
    NgOptimizedImage,
    MatBadge
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
