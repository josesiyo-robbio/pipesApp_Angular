import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import {PrimeNGModule} from '../prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    PrimeNGModule,
    NgOptimizedImage
  ],
  exports: [MenuComponent]
})
export class SharedModule { }
