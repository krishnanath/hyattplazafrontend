import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { map } from 'rxjs/operators';

@Injectable()
export class GenericPageService {
  constructor (
    private apiService: ApiService
  ) {}

  getInnerPageCategories(catId: number, lang: string = 'en'): Observable<any> {
      return this.apiService.get('/Category/loadSubCategorisByCatID?categoryID=' + catId + '&language=' + lang)
        .pipe(map(data => data));
  }

  getFeaturedShopOrDine(key: string, lang: string = 'en'): Observable<any> {
     return this.apiService.get('/Brands/loadFeaturedStoreORResturent?language=' + lang + '&categoryKey=' + key)
        .pipe(map(data => data));
  }

  getFeaturedEntertainments(lang: string = 'en'): Observable<any> {
     return this.apiService.get('/Brands/loadAllEntertainmentWithDetails?language=' + lang)
        .pipe(map(data => data));
  }

  getFeaturedEvents(page: number, limit: number, lang: string = 'en'): Observable<any> {
    return this.apiService.get('/Category/loadAllEventList?language=' + lang + '&limitFrom=' + page + '&limitTo=' + limit)
       .pipe(map(data => data));
  }
  getBrands(categoryKey: 'shopping' , lang: string = 'en', page: number = 0 , limit: number = 0  ): Observable<any> {
    return this.apiService.get('/Brands/loadAllBrands?language=' + lang + '&limitFrom=' + page + '&limitTo=' + limit + '&categoryKey=' + categoryKey )
       .pipe(map(data => data));
  }

  getAlbumImages(albumId: number)
  {
    return this.apiService.get('/Gallery/loadGalleryByAlbum?albumID=' + albumId )
    .pipe(map(data => data));
  }

}
