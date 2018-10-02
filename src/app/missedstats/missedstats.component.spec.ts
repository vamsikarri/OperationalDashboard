import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissedstatsComponent } from './missedstats.component';

describe('MissedstatsComponent', () => {
  let component: MissedstatsComponent;
  let fixture: ComponentFixture<MissedstatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissedstatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissedstatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
