import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent {

  /**
   * @internal
   */
   constructor(
    private router: Router
  ) {}

  /**
   * If Pterodactyl is in motion
   */
  dinoIsMoving = false;

  /**
   * dino moves on screen
   */
  dinoEnter = false;

  /**
   * @internal
   */
   ngOnInit(): void {
    setTimeout(() => {
      this.dinoEnter = true;
    }, 1000);
  }

  /**
   * Redirect to user to / (Home)
   */
  goToHome(): void{
    this.dinoIsMoving = true;
    setTimeout(() => {
      void this.router.navigate(['/']);
    }, 3000);
  }
}
