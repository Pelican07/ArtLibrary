import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateArtsComponent } from './update-arts.component';

describe('UpdateArtsComponent', () => {
  let component: UpdateArtsComponent;
  let fixture: ComponentFixture<UpdateArtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateArtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateArtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
