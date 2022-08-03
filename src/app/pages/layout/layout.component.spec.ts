import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { LayoutComponent } from './layout.component';
import { LayoutModule } from './layout.module';
import { LayoutRoutingModule, routes } from './layout.routing.module';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlertModule } from 'src/app/features/alert/alert.module';

describe('LayoutComponent', () => {
  describe('[Module]', () => {
    it('should load instance of its own module', async () => {
      await TestBed.configureTestingModule({
        declarations: [],
        imports: [
          LayoutModule,
          HttpClientTestingModule,
          RouterTestingModule.withRoutes(routes),
        ],
      });

      const subject =
        TestBed.createComponent(LayoutComponent).componentInstance;

      expect(subject).toBeTruthy();
    });
  });

  describe('[Component]', () => {
    let component: LayoutComponent;
    let fixture: ComponentFixture<LayoutComponent>;
    let router: Router;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [LayoutComponent],
        imports: [
          CommonModule,
          LayoutRoutingModule,
          AlertModule,
          LayoutRoutingModule,
          RouterTestingModule.withRoutes([]),
          HttpClientTestingModule,
        ],
        providers: [],
      }).compileComponents();
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(LayoutComponent);
      component = fixture.componentInstance;
      router = fixture.debugElement.injector.get(Router);
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    describe('[DOM Render]', () => {
      
    });
  });
});
