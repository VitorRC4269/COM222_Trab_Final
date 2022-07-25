import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExemplarComponent } from './add-exemplar.component';

describe('AddExemplarComponent', () => {
  let component: AddExemplarComponent;
  let fixture: ComponentFixture<AddExemplarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddExemplarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExemplarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
