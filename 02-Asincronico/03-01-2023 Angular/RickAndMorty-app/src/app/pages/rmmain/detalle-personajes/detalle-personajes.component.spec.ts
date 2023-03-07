import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePersonajesComponent } from './detalle-personajes.component';

describe('DetallePersonajesComponent', () => {
  let component: DetallePersonajesComponent;
  let fixture: ComponentFixture<DetallePersonajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallePersonajesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallePersonajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
