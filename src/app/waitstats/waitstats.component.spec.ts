import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitstatsComponent } from './waitstats.component';

describe('WaitstatsComponent', () => {
  let component: WaitstatsComponent;
  let fixture: ComponentFixture<WaitstatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaitstatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitstatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
