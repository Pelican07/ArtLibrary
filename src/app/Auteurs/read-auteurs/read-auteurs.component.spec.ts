import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadAuteursComponent } from './read-Auteurs.component';

describe('ReadAuteursComponent', () => {
  let component: ReadAuteursComponent;
  let fixture: ComponentFixture<ReadAuteursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadAuteursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadAuteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
