import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDistibutorComponent } from './add-distibutor.component';

describe('ViewDistibutorComponent', () => {
  let component: AddDistibutorComponent;
  let fixture: ComponentFixture<AddDistibutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDistibutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDistibutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
