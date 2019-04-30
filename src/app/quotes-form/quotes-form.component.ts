import { Component, OnInit ,Output, EventEmitter} from '@angular/core';
import {Quotes} from '../quotes';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {
  title = 'quotes-app';
  h1 = 'Quotes'

  

  newQuote=new Quotes(0,0,0,"","");
  @Output() output=new EventEmitter<Quotes>();
  submitQuote(){
    this.output.emit(this.newQuote)
    this.newQuote=new Quotes(0,0,0,"","");

  }
  constructor() { }

  ngOnInit() {
  }

}
