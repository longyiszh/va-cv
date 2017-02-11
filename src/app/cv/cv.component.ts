import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { CvService } from './cv.service';

interface IUser {
  name: string,
  avatar?: string,
  field?: string,
  company: string,
  // position: string
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
  providers: [CvService]
})
export class CvComponent implements OnInit {

  constructor(private appService: CvService, private router: Router, private actRoute: ActivatedRoute) {
    actRoute.data.subscribe((datium)=>{this.urldata = datium});
  }

  public owners;
  public ownerError: string;

  public urldata: {  };

  private selectOwnerID: number;
  public userDefaultAvatar: string = "default_avatar_assassin.png"

  public user: IUser= {
    name: "",
    company: "",
    // position: "",
    avatar: this.userDefaultAvatar,
  }

  public info: IInfo = {
    phone: "",
    email: "",
  }

  public edu: IEdu = {
    school: "",
    major: "",
    degree: "",
    skills: [],
  }

  public awards: [IAwards] = [
    {
      title: [],
      level: "",
      time: new Date("1980/1/1"),
    }
  ]

  public apply: IDesiredJobs = {
    desiredjob: []
  }

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

  findOwnerId(name, data) {
    for(let owner of data) {
      if(owner.name === name) {
        return owner.id;
      }
    }
    return -1;
  }

  ngOnInit() {
    this.appService.getInfo().subscribe(
      (resOwner) => {
        this.owners = resOwner;
        if (this.urldata["viewBy"] === "id") {
          this.getOwnerId()
          let owner = this.owners[this.selectOwnerID];
          this.user = owner.user;
          this.info = owner.info;
          this.edu = owner.edu;
          this.awards = owner.awards;
          this.apply = owner.apply;
          this.workexp = owner.workexp;
          this.projects = owner.projects;
          this.proInterest = owner.proInterest;
          this.perInterest = owner.perInterest;
        }

       },
      (resOwnerError) => this.ownerError = resOwnerError
    );
  }
}
