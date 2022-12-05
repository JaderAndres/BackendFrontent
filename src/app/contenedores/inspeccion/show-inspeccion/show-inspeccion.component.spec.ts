import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowInspeccionComponent } from './show-inspeccion.component';

describe('ShowInspeccionComponent', () => {
  let component: ShowInspeccionComponent;
  let fixture: ComponentFixture<ShowInspeccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowInspeccionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowInspeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
