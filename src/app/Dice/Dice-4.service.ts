import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Dice4 {
  GetalGrote: number;

  constructor() {
    this.GetalGrote = 4;
  }

  getGetal(): number {
    let uitkomst: number;

    uitkomst = Math.floor(Math.random() * this.GetalGrote) + 1;
    return uitkomst;
  }
}
