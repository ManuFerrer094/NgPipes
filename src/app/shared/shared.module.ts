import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { MenuComponent } from './components/menu/menu.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    InputTextModule,
    FormsModule
  ],
  exports: [
    MenuComponent
  ]
})
export class SharedModule { }
