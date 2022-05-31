import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsumComponent } from './subsum.component';

describe('SubsumComponent', () => {
  let component: SubsumComponent;
  let fixture: ComponentFixture<SubsumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubsumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubsumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
