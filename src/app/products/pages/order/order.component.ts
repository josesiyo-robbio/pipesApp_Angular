import { Component } from '@angular/core';
import {Color, Hero} from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  standalone: false,

  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})


export class OrderComponent
{
  public isUpperCase : boolean = true;

  toggleUpperCase () : void {
    this.isUpperCase = !this.isUpperCase;
  }

  public heroes : Hero[] = [
    {
      name : 'John Doe',
      canFly: false,
      color : Color.blue,
    },

    {
      name : 'Batman',
      canFly: false,
      color : Color.black,
    },

    {
      name : 'WOnder Woman',
      canFly: true,
      color : Color.pink,
    },
  ]



}
