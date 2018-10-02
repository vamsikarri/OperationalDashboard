import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailedstatsComponent } from './failedstats.component';

describe('FailedstatsComponent', () => {
  let component: FailedstatsComponent;
  let fixture: ComponentFixture<FailedstatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailedstatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailedstatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
