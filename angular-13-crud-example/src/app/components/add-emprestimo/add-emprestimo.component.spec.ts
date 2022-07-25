import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmprestimoComponent } from './add-emprestimo.component';

describe('AddEmprestimoComponent', () => {
  let component: AddEmprestimoComponent;
  let fixture: ComponentFixture<AddEmprestimoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEmprestimoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmprestimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
