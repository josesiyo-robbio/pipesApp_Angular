import { Component } from '@angular/core';

@Component({
  selector: 'app-numbers-page',
  standalone: false,

  templateUrl: './numbers-page.component.html',
  styleUrl: './numbers-page.component.css'
})
export class NumbersPageComponent {
  public totalSeals : number = 2323423423.4323423;
  public percent : number = 0.5429;

}
