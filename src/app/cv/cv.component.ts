import { Component, OnInit } from '@angular/core';

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

  constructor(private appService: CvService) { }

  public owner;
  public ownerError: string;

  private selectOwnerID: number = 1;
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

  ngOnInit() {
    this.appService.getInfo().subscribe(
      (resOwner) => { 
        this.owner = resOwner;
        this.user = this.owner[this.selectOwnerID].user;
        this.info = this.owner[this.selectOwnerID].info;
        this.edu = this.owner[this.selectOwnerID].edu;
        this.awards = this.owner[this.selectOwnerID].awards;
        this.apply = this.owner[this.selectOwnerID].apply;
        this.workexp = this.owner[this.selectOwnerID].workexp;
        this.projects = this.owner[this.selectOwnerID].projects;
        this.proInterest = this.owner[this.selectOwnerID].proInterest;
        this.perInterest = this.owner[this.selectOwnerID].perInterest;
       },
      (resOwnerError) => this.ownerError = resOwnerError
    );
  }
}
