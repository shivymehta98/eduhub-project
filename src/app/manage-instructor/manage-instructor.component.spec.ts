import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageInstructorComponent } from './manage-instructor.component';

describe('ManageInstructorComponent', () => {
  let component: ManageInstructorComponent;
  let fixture: ComponentFixture<ManageInstructorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageInstructorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
