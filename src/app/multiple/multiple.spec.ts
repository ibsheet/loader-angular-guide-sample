import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Multiple } from './multiple';

describe('Multiple', () => {
  let component: Multiple;
  let fixture: ComponentFixture<Multiple>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Multiple]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Multiple);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
