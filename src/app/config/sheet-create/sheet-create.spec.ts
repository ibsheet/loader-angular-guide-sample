import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetCreate } from './sheet-create';

describe('SheetCreate', () => {
  let component: SheetCreate;
  let fixture: ComponentFixture<SheetCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SheetCreate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SheetCreate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
