import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dataload } from './dataload';

describe('Dataload', () => {
  let component: Dataload;
  let fixture: ComponentFixture<Dataload>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dataload]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dataload);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
