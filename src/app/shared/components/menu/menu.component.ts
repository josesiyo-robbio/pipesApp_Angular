import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'shared-menu',
  standalone: false,

  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent
{
  public menuItems: MenuItem[] = [];


  ngOnInit()
  {
    this.menuItems = [
      {
        label: 'Angular Pipes',
        icon: 'pi pi-angular',
        items : [
          {
            label : 'Dates and Text',
            icon: 'pi pi-align-left',
            routerLink : '/',
          },
          {
            label : 'Numbers',
            icon: 'pi pi-dollar',
            routerLink : 'numbers',
          },
          {
            label : 'No Common',
            icon: 'pi pi-globe',
            routerLink : 'uncommon',
          },
        ]
      },
      {
        label: 'Personalized Pipes',
        icon: 'pi pi-cog',
        items : [
          {
            label : 'Customized Pipes',
            icon: 'pi pi-cog',
            routerLink : 'custom',
          }
        ]
      }

    ];
  }
}
