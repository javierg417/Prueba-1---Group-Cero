import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FootComponent } from './foot/foot.component';
import { HeadComponent } from './head/head.component';

@NgModule({
  declarations: [
    HeadComponent,
    FootComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    HeadComponent,
    FootComponent
  ]
})
export class ComponentsModule { }
