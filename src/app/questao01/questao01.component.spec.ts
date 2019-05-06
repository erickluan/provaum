import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Questao01Component } from './questao01.component';

describe('Questao01Component', () => {
  let component: Questao01Component;
  let fixture: ComponentFixture<Questao01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Questao01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Questao01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
