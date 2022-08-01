import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import HelpType from "../enums/HelpType.enum";

@Injectable({ providedIn: 'root' })
export class HelpService {
  /**
   * Total team help
   */
  teamHelp!: number;

  /**
  * Total boss help
  */
  bossHelp!: number;

  /**
  * Total Dino help
  */
  dinoHelp!: number;

  /**
   * Indicates value changes
   */
  helpChange$ = new Subject<boolean>();

  /**
   * Get help value
   * @param type
   * @returns
   */
  getValue(type: string): string {
    return localStorage.getItem(type) || '';
  }

  /**
   * Set help value
   * @param type
   * @param value
   */
  setValue(type: string, value: string) {
    localStorage.setItem(type, value || '');
  }

  /**
   * Set initial value
   */
  setHelp(): void {
    this.setValue((HelpType.DINO), '2');
    this.setValue((HelpType.BOSS), '2');
    this.setValue((HelpType.TEAM), '2');
  }

  /**
   * Update values
   */
  updateHelp(): void{
    if(!this.getValue(HelpType.DINO)){
      this.setHelp();
    }
    this.dinoHelp = Number(this.getValue((HelpType.DINO)));
    this.bossHelp = Number(this.getValue((HelpType.BOSS)));
    this.teamHelp = Number(this.getValue((HelpType.TEAM)));
    this.helpChange$.next(true);
  }
}
