import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarPorRegionComponent } from './consultar-por-region.component';

describe('ConsultarPorRegionComponent', () => {
  let component: ConsultarPorRegionComponent;
  let fixture: ComponentFixture<ConsultarPorRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarPorRegionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarPorRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
