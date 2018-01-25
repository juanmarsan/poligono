import {IconfigurationService} from "./contracts/iConfigurationService";
import {Injectable} from "@angular/core";

@Injectable()
export class ConfigurationService implements IconfigurationService{
  isPhone: boolean = false;
}
