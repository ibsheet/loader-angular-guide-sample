import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Multirecord } from './multirecord';

describe('Multirecord', () => {
  let component: Multirecord;
  let fixture: ComponentFixture<Multirecord>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Multirecord]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Multirecord);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
