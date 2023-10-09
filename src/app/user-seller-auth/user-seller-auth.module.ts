import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { DemoComponent } from '../demo/demo.component';
import { Demo01Component } from './demo01/demo01.component';



@NgModule({
  declarations: [
    Demo01Component
  ],
  imports: [
    CommonModule,

  ],
  exports:[
    // DemoComponent/
  ]
})
export class UserSellerAuthModule { }
