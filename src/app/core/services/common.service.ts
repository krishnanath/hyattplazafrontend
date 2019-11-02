import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { map } from 'rxjs/operators';

@Injectable()
export class CommonService {
  constructor (
    private apiService: ApiService
  ) {}

  getMainMenu(lang: string = 'en'): Observable<any> {
      return this.apiService.get('/Category/getMainMenu?language=' + lang)
        .pipe(map(data => data));
  }

  getFooterSocialIcons(): Observable<any> {
    return this.apiService.get('/Category/socialMedia')
      .pipe(map(data => data));
  }

  getFooterLinks(lang: string ='en'): Observable<any> {
    return this.apiService.get('/HomeBanner/loadFooter?language=' + lang)
    .pipe(map(data => data));
  }

  getPageBanner(pageKey: string): Observable<any> {
    return this.apiService.get('/PageBanner/loadPageBanner?pageKey=' + pageKey)
      .pipe(map(data => data));
  }

}