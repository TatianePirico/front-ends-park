import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-step-two',
  templateUrl: './page-step-two.component.html',
  styleUrls: ['./page-step-two.component.scss']
})
export class PageStepTwoComponent implements OnInit {
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
    }, 3000);
  }

  /**
   * Control the position of the Dino on the screen.
   * @returns
   */
  dinoMove(): string {
    switch (this.dinoActions) {
      case 2:
        return 'step-two__dino--goes';

      case 3:
        return 'step-two__dino--leave';

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
      void this.router.navigate(['/step-3']);
    }, 4000);
  }
}
