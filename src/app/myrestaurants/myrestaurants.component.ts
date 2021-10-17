import { Component, OnInit } from '@angular/core';
import { Restaurant as Restaurant } from '../models/restaurant-models';

@Component({
  selector: 'app-grocery',
  templateUrl: './myrestaurants.component.html',
  styleUrls: ['./myrestaurants.component.css',]
})
export class RestaurantComponent implements OnInit {

  restaurants:Restaurant[];

  restaurantName:string = "";

  restaurantRating:string = "";

  restaurantItem: string = "";
  
  constructor() { }

  ngOnInit(): void {

    this.restaurants = [
      {
        content: 'Oshima Sushi',
        rating: 'A-',
        restaurantItem: 'Salmon Teriyaki',
        neverRevisit: false
      },
      {
        content: 'Bucatini',
        rating: 'B+',
        restaurantItem: 'Frutti di Mare',
        neverRevisit: false
      }
    ]
  }

  toggleDone (id: number) {
    this.restaurants.map((value, i) => {
      if (i == id) value.neverRevisit = !value.neverRevisit;

      return value;
    })
  }

  deleteItem (id:number) {
    this.restaurants = this.restaurants.filter((value, i) => i !==id);

    // filter returns a new array and as a result it has been filtered when i(index) does not match id.

  }

  addItem () {
    this.restaurants.push({
      content: this.restaurantName,
      rating: this.restaurantRating,
      restaurantItem: this.restaurantItem,
      neverRevisit: false
    });

    this.restaurantName = "";
    this.restaurantRating = "";
  }


  onEdit(id: number) {
    this.restaurantName = this.restaurants[id].content;
    this.deleteItem(id);

  }

}

