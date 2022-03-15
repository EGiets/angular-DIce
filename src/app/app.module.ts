import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { newArray } from '@angular/compiler/src/util';
import { DiceComponent } from './Dice/Dice.component';
import { EmotesComponent } from './emotes/emotes.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { VerplaatsComponent } from './verplaats/verplaats.component';
import { SpelregelsComponent } from './spelregels/spelregels.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    DiceComponent,
    EmotesComponent,
    MenuComponent,
    VerplaatsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
