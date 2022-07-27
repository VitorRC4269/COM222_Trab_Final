import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtrasadoEmprestimoComponent } from './atrasado-emprestimo.component';

describe('AtrasadoEmprestimoComponent', () => {
  let component: AtrasadoEmprestimoComponent;
  let fixture: ComponentFixture<AtrasadoEmprestimoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtrasadoEmprestimoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtrasadoEmprestimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
