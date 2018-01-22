import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app';
  public isActiveBurger: boolean = true;
  public innerWidth: any;
  public isPhone: boolean = false;

  constructor(){
    this.innerWidth = window.innerWidth;
    this.isPhone = this.innerWidth < 400;
  }

  switchBurger(){
    this.isActiveBurger = ! this.isActiveBurger;
  }
}
