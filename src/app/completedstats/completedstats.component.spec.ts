import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedstatsComponent } from './completedstats.component';

describe('CompletedstatsComponent', () => {
  let component: CompletedstatsComponent;
  let fixture: ComponentFixture<CompletedstatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedstatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedstatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
