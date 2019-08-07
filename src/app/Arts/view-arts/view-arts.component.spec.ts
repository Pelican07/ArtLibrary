import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewArtsComponent } from './view-arts.component';

describe('ViewArtsComponent', () => {
  let component: ViewArtsComponent;
  let fixture: ComponentFixture<ViewArtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewArtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewArtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
