import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { AddCarnetPage } from './add-carnet.page';

describe('AddCarnetPage', () => {
  let component: AddCarnetPage;
  let fixture: ComponentFixture<AddCarnetPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddCarnetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
