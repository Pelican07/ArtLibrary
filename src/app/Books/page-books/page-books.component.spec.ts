import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBooksComponent } from './page-books.component';

describe('PageBooksComponent', () => {
  let component: PageBooksComponent;
  let fixture: ComponentFixture<PageBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
