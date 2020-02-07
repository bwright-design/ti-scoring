import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwilightImperiumComponent } from './games/twilight-imperium/twilight-imperium.component';
import { StageOneComponent } from './games/twilight-imperium/obj-cards/stage-one/stage-one.component';
import { StageTwoComponent } from './games/twilight-imperium/obj-cards/stage-two/stage-two.component';

@NgModule({
  declarations: [
    AppComponent,
    TwilightImperiumComponent,
    StageOneComponent,
    StageTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
