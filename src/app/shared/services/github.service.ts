import { Injectable } from '@angular/core';
import { ApiService } from './core/api.service';
import { Page, Sort } from '@shared/models';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private api: ApiService) {}

  getData(pagination: Page = null, ordering: Sort = null, filter: object = null): Observable<any> {
    return this.api.getData(`repos/angular/angular`, pagination, ordering, filter).pipe(
      tap((data) => {
        console.log('data', data);
        return data;
      })
    );
  }

  getDataList(pagination: Page = null, ordering: Sort = null, filter: object = null): Observable<any> {
    return this.api.getData(`repos/angular/angular/issues`, pagination, ordering, filter).pipe(
      tap((data) => {
        console.log('datalist', data);
        return data;
      })
    );
  }
  getDetails(id, pagination: Page = null, ordering: Sort = null, filter: object = null): Observable<any> {
    return this.api.getData(`repos/angular/angular/issues/${id}`, pagination, ordering, filter).pipe(
      tap((data) => {
        console.log('datalist', data);
        return data;
      })
    );
  }
  getSearchList(search = null, pagination: Page = null, ordering: Sort = null, filter: object = null): Observable<any> {
    return this.api
      .getData(
        `search/issues?q=${search}+repo:angular/angular/node+type:issue+state:open`,
        pagination,
        ordering,
        filter
      )
      .pipe(
        tap((data) => {
          console.log('datalist', data);
          return data;
        })
      );
  }
}
