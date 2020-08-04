import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Style1Component } from './style1/style1.component';
import { Style2Component } from './style2/style2.component';
import { BusstopListComponent } from './style1/busstop-list/busstop-list.component';
import { NopageFoundComponent } from './nopage-found/nopage-found.component';
import { BusstopItemComponent } from './style1/busstop-item/busstop-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Style1Component,
    Style2Component,
    BusstopListComponent,
    NopageFoundComponent,
    BusstopItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
