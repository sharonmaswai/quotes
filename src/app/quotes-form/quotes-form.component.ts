import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {
  title = 'quotes-app';
  h1 = 'Quotes'
  quotes: string[];

  constructor() { }

  ngOnInit() {
  }

}
