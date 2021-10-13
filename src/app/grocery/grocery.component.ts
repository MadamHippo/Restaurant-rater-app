import { Component, OnInit } from '@angular/core';
import { Grocery } from '../models/grocery-models';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.css',]
})
export class GroceryComponent implements OnInit {

  groceries:Grocery[];

  inputGroceries:string = "";
  
  constructor() { }

  ngOnInit(): void {

    this.groceries = [
      {
        content: 'Milk',
        completed: false
      },
      {
        content: 'Eggs',
        completed: false
      }
    ]
  }

  toggleDone (id: number) {
    this.groceries.map((value, i) => {
      if (i == id) value.completed = !value.completed;

      return value;
    })
  }

  deleteItem (id:number) {
    this.groceries = this.groceries.filter((value, i) => i !==id);

  }

  addItem () {
    this.groceries.push({
      content: this.inputGroceries,
      completed: false
    });

    this.inputGroceries = "";
  }

  onEdit(id: number) {
    // how do I edit existing thingy //
    
  }

}

