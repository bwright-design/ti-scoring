import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwilightImperiumComponent } from './twilight-imperium.component';

describe('TwilightImperiumComponent', () => {
  let component: TwilightImperiumComponent;
  let fixture: ComponentFixture<TwilightImperiumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwilightImperiumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwilightImperiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
