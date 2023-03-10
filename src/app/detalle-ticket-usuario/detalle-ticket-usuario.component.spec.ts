import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleTicketUsuarioComponent } from './detalle-ticket-usuario.component';

describe('DetalleTicketUsuarioComponent', () => {
  let component: DetalleTicketUsuarioComponent;
  let fixture: ComponentFixture<DetalleTicketUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleTicketUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleTicketUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
