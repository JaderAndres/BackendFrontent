import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditInspeccionComponent } from './add-edit-inspeccion.component';

describe('AddEditInspeccionComponent', () => {
  let component: AddEditInspeccionComponent;
  let fixture: ComponentFixture<AddEditInspeccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditInspeccionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditInspeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
