import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEstadoComponent } from './show-estado.component';

describe('ShowEstadoComponent', () => {
  let component: ShowEstadoComponent;
  let fixture: ComponentFixture<ShowEstadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowEstadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
