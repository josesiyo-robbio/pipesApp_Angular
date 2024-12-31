import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  standalone: false,

  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent
{

  public nameLower : string = 'maria';
  public nameUpper : string = 'MARIA';
  public fullName : string = 'MaRIa FeRnANdA';

}
