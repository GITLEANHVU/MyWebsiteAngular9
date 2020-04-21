import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QLHocSinhComponent } from './qlhoc-sinh.component';

describe('QLHocSinhComponent', () => {
  let component: QLHocSinhComponent;
  let fixture: ComponentFixture<QLHocSinhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QLHocSinhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QLHocSinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
