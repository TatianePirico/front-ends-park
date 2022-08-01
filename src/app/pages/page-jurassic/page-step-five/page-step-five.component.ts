import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-step-five',
  templateUrl: './page-step-five.component.html',
  styleUrls: ['./page-step-five.component.scss']
})
export class PageStepFiveComponent implements OnInit{
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
   * If Belociraptor is displayed
   */
  showBraquiossauro = false;

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
      this.showBraquiossauro = true;
    }, 3000);
  }

  /**
   * Control the position of the Dino on the screen.
   * @returns string
   */
  dinoMove(): string {
    switch (this.dinoActions) {
      case 2:
        return 'step-five__dino--goes';

      case 3:
        return 'step-five__dino--leave';

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
      void this.router.navigate(['/step-6']);
    }, 4000);
  }
}

