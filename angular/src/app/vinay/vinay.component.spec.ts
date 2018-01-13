import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VinayComponent } from './vinay.component';

describe('VinayComponent', () => {
  let component: VinayComponent;
  let fixture: ComponentFixture<VinayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VinayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VinayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
