import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovimentazioniPage } from './movimentazioni.page';

describe('MovimentazioniPage', () => {
  let component: MovimentazioniPage;
  let fixture: ComponentFixture<MovimentazioniPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimentazioniPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
