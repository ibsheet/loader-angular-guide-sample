import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterDetail } from './master-detail';

describe('MasterDetail', () => {
  let component: MasterDetail;
  let fixture: ComponentFixture<MasterDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasterDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
