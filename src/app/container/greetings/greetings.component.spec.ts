/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GreetingsComponent } from './greetings.component';

describe('GreetingsComponent', () => {
  let component: GreetingsComponent;
  let fixture: ComponentFixture<GreetingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreetingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
