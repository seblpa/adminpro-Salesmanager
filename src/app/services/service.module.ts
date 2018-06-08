import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {
  SettingsService,
  SidebarService,
  SharedService
 } from './service.index';

@NgModule({
  providers: [
    SettingsService,
    SidebarService,
    SharedService
  ],
  imports: [
    CommonModule
  ],
  declarations: []
})
export class ServiceModule { }
