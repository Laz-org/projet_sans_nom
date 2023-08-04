import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { SingleCarnetPage } from './single-carnet.page';

describe('SingleCarnetPage', () => {
  let component: SingleCarnetPage;
  let fixture: ComponentFixture<SingleCarnetPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SingleCarnetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
