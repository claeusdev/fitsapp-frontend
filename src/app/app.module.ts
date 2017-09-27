import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAJBeqWoC--NCzDPh7hg6Uzr5ttpVxCgb0'
    }),
    AgmSnazzyInfoWindowModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
