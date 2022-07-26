import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionarioLoginComponent } from './funcionario-login.component';

describe('FuncionarioLoginComponent', () => {
  let component: FuncionarioLoginComponent;
  let fixture: ComponentFixture<FuncionarioLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncionarioLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionarioLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
