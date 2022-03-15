import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmotesComponent } from './emotes/emotes.component';
import { DiceComponent } from './Dice/Dice.component';
import { VerplaatsComponent } from './verplaats/verplaats.component';
import { SpelregelsComponent } from './spelregels/spelregels.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'Dice', component: DiceComponent },
  { path: 'emotes', component: EmotesComponent },
  { path: 'verplaats', component: VerplaatsComponent },
  { path: 'spelregels', component: SpelregelsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
