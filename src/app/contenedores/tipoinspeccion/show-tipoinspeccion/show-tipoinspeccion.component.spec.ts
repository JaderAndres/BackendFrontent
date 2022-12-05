import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTipoinspeccionComponent } from './show-tipoinspeccion.component';

describe('ShowTipoinspeccionComponent', () => {
  let component: ShowTipoinspeccionComponent;
  let fixture: ComponentFixture<ShowTipoinspeccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowTipoinspeccionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowTipoinspeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
