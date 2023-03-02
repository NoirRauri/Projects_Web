import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RmmainComponent } from './rmmain.component';

describe('RmmainComponent', () => {
  let component: RmmainComponent;
  let fixture: ComponentFixture<RmmainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RmmainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RmmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
