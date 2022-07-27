import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociadoLogoutComponent } from './associado-logout.component';

describe('AssociadoLogoutComponent', () => {
  let component: AssociadoLogoutComponent;
  let fixture: ComponentFixture<AssociadoLogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssociadoLogoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociadoLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
