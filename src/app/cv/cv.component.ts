import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Response } from '@angular/http';

import { TranslateService } from '@ngx-translate/core';
import { CvService } from './cv.service';


interface IUser {
  username: string,
  fullname: string,
  avatar?: string,
  field?: string,
  company: string
}

interface IInfo {
  phone: string,
  email: string,
  birthday?: Date,
  php?: string
}

interface IEdu {
  school: string,
  major: string,
  gpa?: string,
  degree: string,
  skills: any,
}

interface IAwards {
  title: any,
  level: string,
  time: Date,
  img?: string
}

interface IDesiredJobs {
  desiredjob: any
}

interface IWorkExp {
  period: {
    timeStart: Date,
    timeEnd: Date
  },
  company: string,
  title: string
}

interface IProjects {
  time: Date,
  name: string,
  discr: string,
  whatIDid: string,
  img?: string
}

interface IInterests {
  cat: string,
  interest: string
}

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss'],
  providers: [TranslateService]
})
export class CvComponent implements OnInit {

  constructor(
    public cvService: CvService,
    private router: Router,
    private actRoute: ActivatedRoute,
    private translate: TranslateService
   ) {
    actRoute.data.subscribe((datium)=>{this.urldata = datium});
    // translation service init
    translate.addLangs(["en", "zh"]);
    translate.setDefaultLang('en');
    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|zh/) ? browserLang : 'en');
    //translate.use("en");
  }

  changeLanguage(lang){
      this.translate.use(lang);
  }

  public owners;
  public ownerError: string;

  public urldata: {  };

  private selectOwnerID: number = 0;
  private selectOwnerName: string;
  public userDefaultAvatar: string = "default_avatar_assassin.png";

  public user: IUser= {
    username: "",
    fullname: "",
    company: "",
    avatar: null
  }

  public info: any = {};

  public edu: any = {};

  public awards: IAwards[] = [

  ]

  public apply: IDesiredJobs = null;

  public workexp: [IWorkExp] = [
    {
      period: {
        timeStart: new Date("1980/1/1"),
        timeEnd: new Date("1980/1/1")
      },
      company: "",
      title: ""
    }
  ]

  public projects: [IProjects] = [
    {
      time: new Date("1980/1/1"),
      name: "",
      discr: "",
      whatIDid: ""
    }
  ]

  public proInterest: [IInterests] = [
    {
      cat: "professional",
      interest: ""
    }
  ]

  public perInterest: [IInterests] = [
    {
      cat: "personal",
      interest: ""
    }
  ]

  getOwnerId() {
		this.actRoute.params.subscribe(
			(params: Params) => {
				this.selectOwnerID = parseInt(params['id']);
			}
		)
  }

  getOwnerName() {
		this.actRoute.params.subscribe(
			(params: Params) => {
				this.selectOwnerName = params['name'];
			}
		)
  }

  findOwnerId(name, data) {
    for(let owner of data) {
      if(owner.user.username === name) {
        return owner.id;
      }
    }
    return -1;
  }

  placeOwnerData() {
    let owner = this.owners[this.selectOwnerID];
    this.user.fullname = owner.user.fullname;
    this.user.field = owner.user.field;
    this.user.avatar = owner.user.avatar;
    this.info = owner.info;
    this.edu = owner.edu;

    this.awards = owner.awards;

    this.apply = owner.apply;
    this.workexp = owner.workexp;
    this.projects = owner.projects;
    this.proInterest = owner.proInterest;
    this.perInterest = owner.perInterest;
  }

  ngOnInit() {
    // this.appService.getInfo().subscribe(
    //   (resOwner) => {
    //     this.owners = resOwner;
    //     if (this.urldata["viewBy"] === "id") {
    //       this.getOwnerId();
    //       this.placeOwnerData();

    //     } else if (this.urldata["viewBy"] === "name") {
    //       this.getOwnerName();
    //       this.selectOwnerID = this.findOwnerId(this.selectOwnerName, this.owners);
    //       this.placeOwnerData();
    //     } else {
    //       console.error("Unsupported viewBy param in route data.");
    //     }
    //    },
    //   (resOwnerError) => this.ownerError = resOwnerError
    // );
    this.loadData();
  }
  private loadData: ()=> any = () => {
    this.cvService.getCVData().then(
      (ownerData) => {
        this.owners = ownerData;
        if (this.urldata["viewBy"] === "id") {
          this.getOwnerId();
          this.placeOwnerData();
        } else if (this.urldata["viewBy"] === "name") {
          this.getOwnerName();
          this.selectOwnerID = this.findOwnerId(this.selectOwnerName, this.owners);
          this.placeOwnerData();
        } else {
          console.error("Unsupported viewBy param in route data.");
        }
      },
      (error: Response) => {
        console.error("failed to load data");
      }
    );


  }
}


