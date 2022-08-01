import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-step-three',
  templateUrl: './page-step-three.component.html',
  styleUrls: ['./page-step-three.component.scss']
})
export class PageStepThreeComponent implements OnInit {
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
   * Control the position of the Dino on the screen.
   * @returns
   */
  dinoMove(): string {
    switch (this.dinoActions) {
      case 2:
        return 'step-three__dino--goes';

      case 3:
        return 'step-three__dino--leave';

      default:
        return '';
    }
  }

  /**
   * Redirect to the next challenge
   */
  nextChallenge(): void {
    this.dinoActions = 3;
    setTimeout(() => {
      void this.router.navigate(['/step-4']);
    }, 4000);
  }
}
