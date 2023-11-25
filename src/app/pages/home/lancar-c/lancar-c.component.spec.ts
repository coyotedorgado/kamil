import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LancarCComponent } from './lancar-c.component';

describe('LancarCComponent', () => {
  let component: LancarCComponent;
  let fixture: ComponentFixture<LancarCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LancarCComponent]
    });
    fixture = TestBed.createComponent(LancarCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
