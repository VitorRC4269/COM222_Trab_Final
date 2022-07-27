import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionarioLogoutComponent } from './funcionario-logout.component';

describe('FuncionarioLogoutComponent', () => {
  let component: FuncionarioLogoutComponent;
  let fixture: ComponentFixture<FuncionarioLogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncionarioLogoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionarioLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
