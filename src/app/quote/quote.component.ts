import { Component, OnInit } from '@angular/core';
import {Quotes} from '../quotes'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes=[
    new Quotes(1,0,0,'Pumba','Hakuna matata','Sharon'),
    new Quotes(2, 0,0, ' Anonymous','To each their own','Chep'),
    new Quotes(3,0,0, 'Wahenga','Pilipili usioila yakuashiani','Maswai'),
    ];
    toogleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
    }
    quote:Quotes
    addNewQuotes(quotes:Quotes){
    this.quote=new Quotes(1,0,0,"","","",)
    let quotesLength=this.quotes.length;
    quotes.id=quotesLength+1;
    this.quote=quotes;
    this.quotes.push(this.quote);
    }
    
  ngOninit(){

  }
  constructor() { }

  ngOnInit() {
  }

}
