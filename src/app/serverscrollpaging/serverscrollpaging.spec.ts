import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Serverscrollpaging } from './serverscrollpaging';

describe('Serverscrollpaging', () => {
  let component: Serverscrollpaging;
  let fixture: ComponentFixture<Serverscrollpaging>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Serverscrollpaging]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Serverscrollpaging);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
