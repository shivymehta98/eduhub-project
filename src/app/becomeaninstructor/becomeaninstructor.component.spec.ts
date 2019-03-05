import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeaninstructorComponent } from './becomeaninstructor.component';

describe('BecomeaninstructorComponent', () => {
  let component: BecomeaninstructorComponent;
  let fixture: ComponentFixture<BecomeaninstructorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BecomeaninstructorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BecomeaninstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
