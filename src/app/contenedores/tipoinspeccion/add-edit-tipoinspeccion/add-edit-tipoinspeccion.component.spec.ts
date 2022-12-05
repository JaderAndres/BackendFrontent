import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTipoinspeccionComponent } from './add-edit-tipoinspeccion.component';

describe('AddEditTipoinspeccionComponent', () => {
  let component: AddEditTipoinspeccionComponent;
  let fixture: ComponentFixture<AddEditTipoinspeccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditTipoinspeccionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditTipoinspeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
