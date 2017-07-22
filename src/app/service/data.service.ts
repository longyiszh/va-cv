import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers, RequestMethod } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  devBaseApi: string = "http://127.0.0.1:3000";

  getRawData(url: string): any {
    let data = this.http.get(url).map(
      this.extractData
    )
    .catch(this.throwException);

    return data;
  }

  throwException(error: Response) {
    console.error(error);
    return Observable.throw(error || "Server Error");
  }

  extractData(res: Response) {
    let data = res.json() || [];
    return data;
  }


  getCookedData(url: string, extractMethod: (value: Response, index: number) => {}) {
    let data = this.http.get(url).map(
      extractMethod
    )
    return data;
  }

  getData(url: string, extractMethod?: (value: Response, index: number) => {}) {
    let data = this.http.get(url).map(
      extractMethod || this.extractData
    )
    .catch(this.throwException);
    return data;
  }

  postJsonData(url: string, data: any) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let postData = JSON.stringify(data);
    let options = new RequestOptions({
      headers: headers,
    });

    return this.http.post(url, postData, options).map(res => res.json());
  }

  deleteData: (url: string) => any = (url: string) => {
    return this.http.delete(url).map(res => res.json());
  };

  formatDate: (date: any) => Date = (date: any) => {
    let formatedDate: Date;
    if (typeof date === 'string') {
        formatedDate = new Date(date);
    } else if (date instanceof Date){
        formatedDate = date;
    } else {
        formatedDate = null;
    }
    return formatedDate;
  };

}
