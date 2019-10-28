import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { map } from 'rxjs/operators';

@Injectable()
export class PageService {
  constructor(
    private apiService: ApiService
  ) {}

  getVipcards(lang: string = 'en'): Observable<any> {
      return this.apiService.get('/Category/loadVipParticipants?language=' + lang)
        .pipe(map(data => data));
  }
}
