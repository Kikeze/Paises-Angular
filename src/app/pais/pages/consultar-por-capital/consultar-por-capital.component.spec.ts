import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarPorCapitalComponent } from './consultar-por-capital.component';

describe('ConsultarPorCapitalComponent', () => {
  let component: ConsultarPorCapitalComponent;
  let fixture: ComponentFixture<ConsultarPorCapitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarPorCapitalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarPorCapitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
