import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Questao03Component } from './questao03.component';

describe('Questao03Component', () => {
  let component: Questao03Component;
  let fixture: ComponentFixture<Questao03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Questao03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Questao03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
