import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import {Quote} from '../quote';
@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
@Input() quote: Quote;
@Output() isUnsatisfied = new EventEmitter<boolean>();

  // quoteUnsatisfied(unsatisfied:boolean){
  //   this.isUnsatisfied.emit(unsatisfied);
  // }
  quoteDelete(unsatisfied:boolean){
    this.isUnsatisfied.emit(unsatisfied);
  }
  numberOfLikes:number =0
  upButton(){
    this.numberOfLikes ++
  }
  numberOfDislikes:number =0
  downButton(){
    this.numberOfDislikes ++
  }

  constructor() { }

  ngOnInit(): void {
  }

}
