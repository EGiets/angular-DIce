import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Dice6 {
  GetalGrote: number;

  constructor() {
    this.GetalGrote = 6;
  }

  getGetal(): number {
    let uitkomst: number;

    uitkomst = Math.floor(Math.random() * this.GetalGrote) + 1;
    return uitkomst;
  }
}
