import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoinspeccionComponent } from './tipoinspeccion.component';

describe('TipoinspeccionComponent', () => {
  let component: TipoinspeccionComponent;
  let fixture: ComponentFixture<TipoinspeccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoinspeccionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoinspeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
