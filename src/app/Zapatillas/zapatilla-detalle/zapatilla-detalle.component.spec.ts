import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZapatillaDetalleComponent } from './zapatilla-detalle.component';

describe('ZapatillaDetalleComponent', () => {
  let component: ZapatillaDetalleComponent;
  let fixture: ComponentFixture<ZapatillaDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZapatillaDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZapatillaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
