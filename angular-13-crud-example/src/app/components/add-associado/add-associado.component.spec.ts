import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAssociadoComponent } from './add-associado.component';

describe('AddAssociadoComponent', () => {
  let component: AddAssociadoComponent;
  let fixture: ComponentFixture<AddAssociadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAssociadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAssociadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
