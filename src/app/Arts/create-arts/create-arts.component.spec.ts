import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateArtsComponent } from './create-arts.component';

describe('CreateArtsComponent', () => {
  let component: CreateArtsComponent;
  let fixture: ComponentFixture<CreateArtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateArtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateArtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
