import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verplaats',
  templateUrl: './verplaats.component.html',
  styleUrls: ['./verplaats.component.css']
})
export class VerplaatsComponent implements OnInit {
  input: string;
  output: string;
  constructor() { }

  ngOnInit() {
  }
  verplaats () {
    this.output = this.input;
    this.input = '';
  }

}