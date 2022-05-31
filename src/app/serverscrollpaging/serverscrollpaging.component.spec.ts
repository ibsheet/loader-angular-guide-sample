import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerscrollpagingComponent } from './serverscrollpaging.component';

describe('ServerscrollpagingComponent', () => {
  let component: ServerscrollpagingComponent;
  let fixture: ComponentFixture<ServerscrollpagingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerscrollpagingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerscrollpagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
