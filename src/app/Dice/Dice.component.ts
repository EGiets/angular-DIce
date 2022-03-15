import { Component, OnInit } from '@angular/core';
import { Dice4 } from './Dice-4.service';
import { Dice6 } from './Dice-6.service';

@Component({
  selector: 'app-emotes',
  templateUrl: './Dice.component.html',
  styleUrls: ['./Dice.component.css'],
})
export class DiceComponent implements OnInit {
  uitkomst: number;
  constructor() {}

  ngOnInit() {}

  Runcoded6() {
    let dice6 = new Dice6();
    this.uitkomst = dice6.getGetal();
  }

  Runcoded4() {
    let dice4 = new Dice4();
  }
}
