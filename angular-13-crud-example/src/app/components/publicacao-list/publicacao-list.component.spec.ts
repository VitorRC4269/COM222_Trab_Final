import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacaoListComponent } from './publicacao-list.component';

describe('PublicacaoListComponent', () => {
  let component: PublicacaoListComponent;
  let fixture: ComponentFixture<PublicacaoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicacaoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicacaoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
