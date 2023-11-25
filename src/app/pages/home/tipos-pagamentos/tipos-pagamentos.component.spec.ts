import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposPagamentosComponent } from './tipos-pagamentos.component';

describe('TiposPagamentosComponent', () => {
  let component: TiposPagamentosComponent;
  let fixture: ComponentFixture<TiposPagamentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TiposPagamentosComponent]
    });
    fixture = TestBed.createComponent(TiposPagamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
