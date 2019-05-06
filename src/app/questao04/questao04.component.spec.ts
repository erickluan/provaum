import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Questao04Component } from './questao04.component';

describe('Questao04Component', () => {
  let component: Questao04Component;
  let fixture: ComponentFixture<Questao04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Questao04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Questao04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
