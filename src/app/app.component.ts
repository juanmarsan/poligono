import { Component } from '@angular/core';
import {ConfigurationService} from "../core/domain/services/configurationService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app';
  public isActiveBurger: boolean = true;
  public innerWidth: any;

  constructor(private ConfigurationService: ConfigurationService){
    this.innerWidth = window.innerWidth;
    this.ConfigurationService.isPhone = this.innerWidth < 400;
  }

  switchBurger(){
    this.isActiveBurger = ! this.isActiveBurger;
  }
}
