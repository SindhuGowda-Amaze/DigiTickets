import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelptopicdashComponent } from './helptopicdash.component';

describe('HelptopicdashComponent', () => {
  let component: HelptopicdashComponent;
  let fixture: ComponentFixture<HelptopicdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelptopicdashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelptopicdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
