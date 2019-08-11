import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadArtsComponent } from './read-arts.component';

describe('ReadArtsComponent', () => {
  let component: ReadArtsComponent;
  let fixture: ComponentFixture<ReadArtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadArtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadArtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
