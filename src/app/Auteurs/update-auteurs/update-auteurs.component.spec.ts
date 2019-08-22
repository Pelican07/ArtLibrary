import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAuteursComponent } from './update-Auteurs.component';

describe('UpdateAuteursComponent', () => {
  let component: UpdateAuteursComponent;
  let fixture: ComponentFixture<UpdateAuteursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAuteursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAuteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
