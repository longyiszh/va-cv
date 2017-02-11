/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Http404Component } from './http404.component';

describe('Http404Component', () => {
  let component: Http404Component;
  let fixture: ComponentFixture<Http404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Http404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Http404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
