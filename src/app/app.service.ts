import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AppService {
  private _url: string = "../assets/data/owner.json";

  constructor(private _http: Http) { }

  getInfo() {
    let info = this._http.get(this._url)
      .map(this.extractData)
      .catch(this.throwException);

    return info;
  }

  extractData(res: Response) {
    let data = res.json() || [];
    data.forEach(medium => {
      // birthday
      medium.info.birthday = new Date(medium.info.birthday);
      // date in awards
      medium.awards.time = new Date(medium.awards.time);
      // date in projects
      medium.projects.time = new Date(medium.projects.time);
      // date in workexp
      medium.workexp.forEach(exp => {
        exp.period.timeStart = new Date(exp.period.timeStart);
        exp.period.timeEnd = new Date(exp.period.timeEnd);
      });
      //date in projects
      medium.projects.forEach(project => {
        project.time = new Date(project.time);
      });
    });
    return data;
  }

  throwException(error: Response) {
    console.error(error);
    return Observable.throw(error || "Server Error");
  }
}
