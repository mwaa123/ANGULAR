import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, 'inspirational quote', 'wrinkles mean you laughed,grey hair means you cared and scars means you lived','by Goodwill',),
    new Quote(2,'pointed quoes','some people are not just missing a screw,the whole toolbox is lost','by ruth',)
  
  
  
  ];
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    // goal.completeDate = new Date(goal.completeDate)
    this.quotes.push(quote)
  }

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
    
  }
   
  deleteQuote(isUnsatisfied, index){
    if (isUnsatisfied) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
