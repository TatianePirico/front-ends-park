import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PageJurassicComponent } from './page-jurassic.component';

describe('PageJurassicComponent', () => {
  let component: PageJurassicComponent;
  let fixture: ComponentFixture<PageJurassicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageJurassicComponent ],
      imports: [ RouterTestingModule ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageJurassicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
