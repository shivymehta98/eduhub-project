import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworksecurityComponent } from './networksecurity.component';

describe('NetworksecurityComponent', () => {
  let component: NetworksecurityComponent;
  let fixture: ComponentFixture<NetworksecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworksecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworksecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
