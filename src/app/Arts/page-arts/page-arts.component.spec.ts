import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageArtsComponent } from './page-arts.component';

describe('PageArtsComponent', () => {
  let component: PageArtsComponent;
  let fixture: ComponentFixture<PageArtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageArtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageArtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
