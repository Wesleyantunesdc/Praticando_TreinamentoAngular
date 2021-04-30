import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {navigation} from '../navigation';
import { AcessoRoutingModule } from './acesso-routing.module';
import { AcessoComponent } from './acesso.component';
import { NAVIGATION } from '../models/navigation.injection';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';


@NgModule({
  declarations: [
    AcessoComponent
  ],
  imports: [
    CommonModule,
    AcessoRoutingModule,
    MatIconModule,
    MatRadioModule
  ],providers:[
    {provide: NAVIGATION, useValue: navigation}
  ]
})
export class AcessoModule { }
