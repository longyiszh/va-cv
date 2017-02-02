import { Component } from '@angular/core';

interface IUser {
  name: string;
  avatar?: string;
  company: string;
  position: string;
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
    company: "Abstergo Entertainment",
    position: "Project Manager"
  }

  title = `${ this.user.name }'s Resume for ${ this.user.position } at ${ this.user.company }`;
}
