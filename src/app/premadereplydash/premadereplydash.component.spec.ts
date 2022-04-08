import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremadereplydashComponent } from './premadereplydash.component';

describe('PremadereplydashComponent', () => {
  let component: PremadereplydashComponent;
  let fixture: ComponentFixture<PremadereplydashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PremadereplydashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PremadereplydashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
