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
  };

  public clientsMap = {
    '=0' : 'no tenemos ningun cliente esperando',
    '=1' : 'tenemos un cliente esperando',
    'other' : 'tenemos # clientes esperando'
  };

  public clients : string[] = ['maria','fernanda','steve','jose','angelica'];


  changeClient()
  {
    this.namePerson = 'Steve';
    this.gender = 'male';

  }

  deleteClient() {
    this.clients.pop();
  }
}
