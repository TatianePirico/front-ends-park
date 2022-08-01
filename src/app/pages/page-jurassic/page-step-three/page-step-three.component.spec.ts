import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { PageStepThreeComponent } from './page-step-three.component';

describe('PageStepThreeComponent', () => {
  let component: PageStepThreeComponent;
  let fixture: ComponentFixture<PageStepThreeComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageStepThreeComponent ],
      imports: [ RouterTestingModule ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageStepThreeComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  describe('[DOM Render]', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('[Functions]', () => {
    describe('->nextChallenge', () => {
      it('should redirect user to challenge 4 (/step-4), after 4 seconds', done => {
        jest.useFakeTimers();
        const navigateSpy = jest.spyOn(router, 'navigate');
        component.nextChallenge();
        fixture.detectChanges();
        jest.runAllTimers();

        expect(navigateSpy).toHaveBeenCalledWith(['/step-9']);
        done();
      });
    });
  });
});
