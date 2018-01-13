import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SriComponent } from './sri.component';

describe('SriComponent', () => {
  let component: SriComponent;
  let fixture: ComponentFixture<SriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
