import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditEstadoComponent } from './add-edit-estado.component';

describe('AddEditEstadoComponent', () => {
  let component: AddEditEstadoComponent;
  let fixture: ComponentFixture<AddEditEstadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditEstadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
