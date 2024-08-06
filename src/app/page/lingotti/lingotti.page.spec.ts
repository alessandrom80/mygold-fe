import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LingottiPage } from './lingotti.page';

describe('LingottiPage', () => {
  let component: LingottiPage;
  let fixture: ComponentFixture<LingottiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LingottiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
