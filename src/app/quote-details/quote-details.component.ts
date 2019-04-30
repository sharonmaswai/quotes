import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';


@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quote:Quotes;
  
 
  @Output() isPlus = new EventEmitter<boolean>();
  @Output() isMinus = new EventEmitter<boolean>();
  
  
  
  voteAdd(plus:boolean) {
    this.isPlus.emit(plus);
  }
  voteSubtract(minus:boolean) {
    this.isMinus.emit(minus);
  }
  


  constructor() { }

  ngOnInit() {
  }

}
