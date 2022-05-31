import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultirecordComponent } from './multirecord.component';

describe('MultirecordComponent', () => {
  let component: MultirecordComponent;
  let fixture: ComponentFixture<MultirecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultirecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultirecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
