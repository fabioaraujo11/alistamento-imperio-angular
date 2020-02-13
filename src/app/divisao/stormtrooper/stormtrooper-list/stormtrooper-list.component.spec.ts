import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StormtrooperListComponent } from './stormtrooper-list.component';

describe('StormtrooperListComponent', () => {
  let component: StormtrooperListComponent;
  let fixture: ComponentFixture<StormtrooperListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StormtrooperListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StormtrooperListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
