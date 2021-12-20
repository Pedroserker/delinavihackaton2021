import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JumboviewComponent } from './jumboview.component';

describe('JumboviewComponent', () => {
  let component: JumboviewComponent;
  let fixture: ComponentFixture<JumboviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JumboviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JumboviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
