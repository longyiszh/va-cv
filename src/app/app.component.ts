import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

interface IUser {
  name: string,
  avatar?: string,
  field?: string,
  company: string,
  position: string
}

interface IInfo {
  phone: string,
  email: string,
  birthday?: string,
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
  img?: string
}

interface IInterests {
  cat: string,
  interest: string
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AppService]
})
export class AppComponent implements OnInit {
  constructor(private appService: AppService){
  }

  public owner;
  public ownerError: string;

  public user: IUser= {
    name: "",
    company: "",
    position: ""
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
      title: []
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
      discr: ""
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
        this.user = this.owner[0].user;
        this.info = this.owner[0].info;
        this.edu = this.owner[0].edu;
        this.awards = this.owner[0].awards;
        this.apply = this.owner[0].apply;
        this.workexp = this.owner[0].workexp;
        this.projects = this.owner[0].projects;
        this.proInterest = this.owner[0].proInterest;
        this.perInterest = this.owner[0].perInterest;
       },
      (resOwnerError) => this.ownerError = resOwnerError
    );
  }
 



  //title = `${ this.user.name }'s Resume for ${ this.user.position } at ${ this.user.company }`;
}
