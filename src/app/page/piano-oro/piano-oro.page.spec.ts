import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PianoOroPage } from './piano-oro.page';

describe('PianoOroPage', () => {
  let component: PianoOroPage;
  let fixture: ComponentFixture<PianoOroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PianoOroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
