import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroTicketsUsuarioComponent } from './registro-tickets-usuario.component';

describe('RegistroTicketsUsuarioComponent', () => {
  let component: RegistroTicketsUsuarioComponent;
  let fixture: ComponentFixture<RegistroTicketsUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroTicketsUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroTicketsUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
