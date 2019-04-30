import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {Quotes} from '../quotes';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {
  newQuotes=new Quotes (0, 0,0,"","",);
  @Output() addQuotes=new EventEmitter<Quotes>();
  
  submitQuote(){
      this.addQuotes.emit(this.newQuotes);

  }
  ngOnInit() {

  }

  
}
