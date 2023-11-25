import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroServicosComponent } from './cadastro-servicos.component';

describe('CadastroServicosComponent', () => {
  let component: CadastroServicosComponent;
  let fixture: ComponentFixture<CadastroServicosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroServicosComponent]
    });
    fixture = TestBed.createComponent(CadastroServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
