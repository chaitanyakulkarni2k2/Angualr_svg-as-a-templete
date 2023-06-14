import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SvgTemplateComponent } from './svg-template/svg-template.component';

@NgModule({
  declarations: [
    AppComponent,
    SvgTemplateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
