import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotlyjsComponent } from './plotlyjs.component';

describe('PlotlyjsComponent', () => {
  let component: PlotlyjsComponent;
  let fixture: ComponentFixture<PlotlyjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotlyjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotlyjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
