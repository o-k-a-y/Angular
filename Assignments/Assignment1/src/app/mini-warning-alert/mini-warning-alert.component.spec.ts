import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniWarningAlertComponent } from './mini-warning-alert.component';

describe('MiniWarningAlertComponent', () => {
  let component: MiniWarningAlertComponent;
  let fixture: ComponentFixture<MiniWarningAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniWarningAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniWarningAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
