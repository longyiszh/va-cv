import { Component } from '@angular/core';

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
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public user: IUser = {
    name: "Valorad de la Septia",
    avatar: "fallout_vaultboy_va.png",
    field: "GIS/CS",
    company: "Abstergo Entertainment",
    position: "Project Manager"
  };

  public info: IInfo = {
    phone: "19216801010",
    email: "wc@cc.com",
    birthday: "1999-9-9",
    php: "http://www.wcnexus.com"
  };

  public edu: IEdu = {
    school: "Swadian College of Espionage Techniques",
    major: "Reconnaissance and Field Stratagy",
    gpa: "80%",
    degree: "Bachelor of Engineering",
    skills: [
      "Seige engine construction: familiar with 40 types of Seige engine",
      "Camouflage: passed INIT test with top 1% score",
      "Archery: part of gift"
    ],
  }

  public awards: [IAwards] = [
    {
      title: "SC2terrible"
    },
    {
      title: "BillyCDKofTheYear",
      img: "icon_digital_key.png"
    },
    {
      title: "Steam 200+",
      img: "steam.png"
    },
    {
      title: "2016 great Apple fan",
      img: "Apple-icon.png"
    }
  ];

  public apply: IDesiredJobs = {
    desiredjob: [
      "Project Manager"
    ]
  };

  public workexp: [IWorkExp] = [
    {
      period: {
        timeStart: new Date("2014/7/1"),
        timeEnd: new Date("2014/8/1")
      },
      company: "Facebook",
      title: "Web Security Intern"
    },
    {
      period: {
        timeStart: new Date("2016/7/1"),
        timeEnd: new Date("2016/9/1")
      },
      company: "Apple Inc.",
      title: "Sales manager"
    }
  ]

  public projects: [IProjects] = [
    {
      time: new Date("2016/1/1"),
      name: "Fire cracker",
      discr: "Demo detonator. I did CS work."
    },
    {
      time: new Date("2016/3/1"),
      name: "Psychic Amplifier",
      discr: "Remote humanoid life-form sensor. I helped thesis reearch and collected materials."
    },
    {
      time: new Date("2016/8/1"),
      name: "Operation Snapshot",
      discr: "Assigned to infiltrate an enemy hideout called Auditore mansion."
    }
  ];

  public proInterest: [IInterests] = [
    {
      cat: "professional",
      interest: "Love little mechanisms"
    },
    {
      cat: "professional",
      interest: "Playing hide and seek"
    },
    {
      cat: "professional",
      interest: "Hacking terminals"
    }
  ];

  public perInterest: [IInterests] = [
    {
      cat: "personal",
      interest: "Staying quiet"
    },
    {
      cat: "personal",
      interest: "Eating pu gai noodle"
    },
    {
      cat: "personal",
      interest: "Going fit"
    }
  ];

  title = `${ this.user.name }'s Resume for ${ this.user.position } at ${ this.user.company }`;
}
