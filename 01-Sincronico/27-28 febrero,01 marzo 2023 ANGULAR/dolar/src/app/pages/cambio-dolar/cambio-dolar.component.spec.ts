import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambioDolarComponent } from './cambio-dolar.component';

describe('CambioDolarComponent', () => {
  let component: CambioDolarComponent;
  let fixture: ComponentFixture<CambioDolarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CambioDolarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CambioDolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
