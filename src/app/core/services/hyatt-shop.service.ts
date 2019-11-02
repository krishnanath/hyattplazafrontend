import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { map } from 'rxjs/operators';

@Injectable()
export class HyattShopService {
  constructor (
    private apiService: ApiService
  ) {}

  getShopDetail(shopId: number, lang: string = 'en'): Observable<any> {
      return this.apiService.get('/Category/loadShopDetail?shopID=' + shopId + '&language=' + lang)
        .pipe(map(data => data));    
  }
}