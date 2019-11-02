import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { map } from 'rxjs/operators';

@Injectable()
export class HomeService {
  constructor (
    private apiService: ApiService
  ) {}

  getHomeBanners(lang: string = 'en'): Observable<any> {
      return this.apiService.get('/HomeBanner/loadHomeBanner?pageKey=Home&language=' + lang)
        .pipe(map(data => data));    
  }

  getHomeCategories(lang: string = 'en'): Observable<any> {
    return this.apiService.get('/Category/loadAllCategoris?language=' + lang)
    .pipe(map(data => data)); 
  }

  getNewsAndEvents( lang:string = 'en', page: number = 0, limit: number = 15, pageKey: string = 'home' ): Observable<any>
  {
    return this.apiService.get('/News/loadNews?pageKey=' + pageKey + '&language=' + lang + '&limitFrom=' + page + '&limitTo=' + limit)
       .pipe(map(data => data));
  }

  getGallery( lang:string = 'en',  pageKey: string ='home' ): Observable<any>
  {
    return this.apiService.get('/Gallery/loadGallery?pageKey=' + pageKey + '&language=' + lang )
       .pipe(map(data => data));
  }

}