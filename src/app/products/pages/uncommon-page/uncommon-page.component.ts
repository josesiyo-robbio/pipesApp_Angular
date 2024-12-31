import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  standalone: false,

  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})


export class UncommonPageComponent
{
  public namePerson: string = 'fernanada';
  public gender: 'male' | 'female' = 'female';
  public invitationMap = {
    'male' : 'invitarlo',
    'female' : 'invitarla'
  }


  changeClient()
  {
    this.namePerson = 'Steve';
    this.gender = 'male';

  }
}
