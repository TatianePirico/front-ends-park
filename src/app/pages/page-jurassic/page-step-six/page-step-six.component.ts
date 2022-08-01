import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-step-six',
  templateUrl: './page-step-six.component.html',
  styleUrls: ['./page-step-six.component.scss']
})
export class PageStepSixComponent implements OnInit {
  /**
   * @internal
  */
  constructor(
    private router: Router
  ) {}

  /**
   * If speech bubble is displayed
   */
  showSpeechBubble = false;

  /**
   * If Velociraptor is displayed
   */
   showVelociraptor = false;

  /**
   * dino moves on screen
   */
  dinoActions = 1;

  /**
   * @internal
   */
  ngOnInit(): void {
    setTimeout(() => {
      this.dinoActions = 2;
    }, 1000);

    setTimeout(() => {
      this.showSpeechBubble = true;
      this.showVelociraptor = true;
    }, 3000);
  }

  /**
   *
   * @returns
   */
  dinoMove(): string {
    switch (this.dinoActions) {
      case 2:
        return 'step-six__dino--goes';

      case 3:
        return 'step-six__dino--leave';

      default:
        return '';
    }
  }
}
