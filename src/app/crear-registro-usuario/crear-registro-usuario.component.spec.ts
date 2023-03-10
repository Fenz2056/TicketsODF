import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearRegistroUsuarioComponent } from './crear-registro-usuario.component';

describe('CrearRegistroUsuarioComponent', () => {
  let component: CrearRegistroUsuarioComponent;
  let fixture: ComponentFixture<CrearRegistroUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearRegistroUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearRegistroUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
