import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAuteursComponent } from './view-Auteurs.component';

describe('ViewAuteursComponent', () => {
  let component: ViewAuteursComponent;
  let fixture: ComponentFixture<ViewAuteursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAuteursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAuteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
