import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationService } from './services/navigation/navigation.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    NavigationService
  ]
})
export class NavigationModule { }
