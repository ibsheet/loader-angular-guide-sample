import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subsum } from './subsum';

describe('Subsum', () => {
  let component: Subsum;
  let fixture: ComponentFixture<Subsum>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subsum]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subsum);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
