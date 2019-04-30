import { Component, OnInit } from '@angular/core';
import {Quotes} from '../quotes'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes=[
    new Quotes(1,0,0,'Pumba','Hakuna matata',),
    new Quotes(2, 0,0, ' Anonymous','To each their own',),
    new Quotes(3,0,0, 'Wahenga','Pilipili usioila yakuashiani',),
    ];
    toogleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
    }
    
    addNewQuotes(Quotes){
    this.quotes=new Quotes(1,0,0,"","",)
    let quotesLength=this.quotes.length;
    Quotes.id=quotesLength+1;
    this.quotes=Quotes;
    this.quotes.push(Quotes);
    }
    
  ngOninit(){

  }
  constructor() { }

  ngOnInit() {
  }

}
