import { Component, OnInit } from '@angular/core';
import { Grocery } from '../models/grocery-models';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.css',]
})
export class GroceryComponent implements OnInit {

  groceries:Grocery[];

  inputGroceries = "";
  
  constructor() { }

  ngOnInit(): void {

    this.groceries = [
      {
        content: 'First item',
        completed: false
      },
      {
        content: 'Second item',
        completed: false
      }
    ]
  }

  toggleDone (id: number) {
    this.groceries.map((v, i) => {
      if (i == id) v.completed = !v.completed;

      return v;
    })
  }

  deleteItem (id:number) {
    this.groceries = this.groceries.filter((v, i) => i !==id);

  }

  addItem () {
    this.groceries.push({
      content: this.inputGroceries,
      completed: false
    });

    this.inputGroceries = "";
  }

}

