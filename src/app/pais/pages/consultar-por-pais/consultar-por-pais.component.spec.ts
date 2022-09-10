import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarPorPaisComponent } from './consultar-por-pais.component';

describe('ConsultarPorPaisComponent', () => {
  let component: ConsultarPorPaisComponent;
  let fixture: ComponentFixture<ConsultarPorPaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarPorPaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarPorPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
