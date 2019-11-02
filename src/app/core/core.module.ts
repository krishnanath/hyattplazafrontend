import { PageService } from './services/page.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
   ApiService,
   HomeService,
   CommonService,
   GenericPageService,
   HyattShopService } from './services';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpDefaultInterceptor } from './interceptors/http.default.interceptor';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpDefaultInterceptor, multi: true },  
    ApiService,
    HomeService,
    CommonService,
    GenericPageService,
    HyattShopService,
    PageService
  ],
  declarations: []
})
export class CoreModule { }