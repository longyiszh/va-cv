import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { TranslateService } from '@ngx-translate/core';

import { DataService } from '../service/data.service'

@Injectable()
export class CvService {
  
  private dataPath = "assets/data";
  //private _url: string = "owner_en.json";
  private defaultFilename: string = "owner_default";
  private filename: string = "owner";// also owner_default_en.json
  private lang: string = "en";
  private fileType: string = "json";

  constructor(
    //private _http: Http,
    private dataService: DataService,
    private translate: TranslateService) { 
      this.lang = this.getCurrentLanguage();
    }

  getCurrentLanguage(): string {
    let brlanguage = this.translate.getBrowserLang();
    let lang = brlanguage.match(/en|zh/) ? `${brlanguage}` : 'en';

    //lang = "zh"

    return lang;
  }

  // getInfo() {
  //   let info = this._http.get(this._url)
  //     .map(this.extractData)
  //     .catch(this.throwException);

  //   return info;
  // }

  private getInfo: (isDefault?)=> Promise<any> = (isDefault = false) => {
    let url: string = `${this.dataPath}/${this.filename}_${this.lang}.${this.fileType}`;
    if (isDefault) {
      url = `${this.dataPath}/${this.defaultFilename}_${this.lang}.${this.fileType}`;
    }
    return new Promise((resolve, reject) => {
      this.dataService.getCookedData(url, this.extractData).subscribe(
        (resData) => {
          resolve(resData);
        },
        (resError) => {
          reject(resError);
        }
      );
    });
  };

  public getCVData: ()=> Promise<any> = () => {
    return new Promise((resolve, reject) => {
      this.getInfo().then(
        (resData) => { // found custom data
          resolve(resData);
        },
        (error) => { //unable to find custom data then fall back to default
          this.getInfo(true).then(
            (resData) => {
              resolve(resData);
            },
            (error) => { // default data is also lost then gg
              reject(error);
            }
          );
          console.warn("no custom data found, falling back to default");
        }
      );
    });

  };

  private extractData: (res: Response)=> any = (res: Response) => {
    let data = res.json() || [];
    data.forEach(medium => {
      // birthday

      medium.info.birthday = this.dataService.formatDate(medium.info.birthday);
      // date in awards
      medium.awards.time = this.dataService.formatDate(medium.awards.time);
      // date in projects
      medium.projects.time = this.dataService.formatDate(medium.projects.time);
      // date in workexp
      medium.workexp.forEach(exp => {
        exp.period.timeStart = this.dataService.formatDate(exp.period.timeStart);
        exp.period.timeEnd = this.dataService.formatDate(exp.period.timeEnd);
      });
      //date in projects
      medium.projects.forEach(project => {
        project.time = this.dataService.formatDate(project.time);
      });
    });
    return data;
  }

}
