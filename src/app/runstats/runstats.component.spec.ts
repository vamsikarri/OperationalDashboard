import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunstatsComponent } from './runstats.component';

describe('RunstatsComponent', () => {
  let component: RunstatsComponent;
  let fixture: ComponentFixture<RunstatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunstatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunstatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
