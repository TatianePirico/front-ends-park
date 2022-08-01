import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import HelpType from 'src/app/core/enums/HelpType.enum';
import { HelpService } from 'src/app/core/services/help.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit{
  /**
   * if "help bar" is open
   */
  isOpen = false;

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
   * Alert
   */
  alertIsOpen = false;

  /**
   * Current temperature of Neonsaurus island
   */
  currentTemperature = '31°C'

  /**
   * @internal
   */
   constructor(
    private helpService: HelpService,
    private router: Router
  ) {}

  /**
   * @internal
   */
  ngOnInit(): void{
    const url = this.router.url;
    this.helpService.helpChange$.subscribe(() => {
      this.dinoHelp = this.helpService.dinoHelp;
      this.bossHelp = this.helpService.bossHelp;
      this.teamHelp = this.helpService.teamHelp;
    })
    this.helpService.updateHelp();
    setTimeout(() => {
      if(url != '/step-6'){
        this.alertIsOpen = true;
      }
    }, 6000);
  }

  /**
   * Show or hide menu after click
   */
  showHideHelp(): void{
    this.isOpen = !this.isOpen;
  }

  /**
   * Remove used help
   * @param type
   */
  useHelp(type: string): void{
    switch (type) {
      case 'team':
        this.teamHelp -= 1;
        this.helpService.setValue(HelpType.TEAM, JSON.stringify(this.teamHelp));
        break;

      case 'boss':
        this.bossHelp -= 1;
        this.helpService.setValue(HelpType.BOSS, JSON.stringify(this.bossHelp));
        break;

      case 'dino':
        this.dinoHelp -= 1;
        this.helpService.setValue(HelpType.DINO, JSON.stringify(this.dinoHelp));
        break;

      default:
        break;
    }
  }
}
