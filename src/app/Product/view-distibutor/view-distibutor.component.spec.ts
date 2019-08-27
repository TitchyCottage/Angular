import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDistibutorComponent } from './view-distibutor.component';

describe('ViewDistibutorComponent', () => {
  let component: ViewDistibutorComponent;
  let fixture: ComponentFixture<ViewDistibutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDistibutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDistibutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
