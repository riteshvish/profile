import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { FooterTabsComponent } from './footer-tabs/footer-tabs.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    FooterTabsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
