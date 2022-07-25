import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPublicacaoComponent } from './add-publicacao.component';

describe('AddPublicacaoComponent', () => {
  let component: AddPublicacaoComponent;
  let fixture: ComponentFixture<AddPublicacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPublicacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPublicacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
