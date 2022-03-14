import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCallComponent } from './edit-call.component';

describe('EditCallComponent', () => {
  let component: EditCallComponent;
  let fixture: ComponentFixture<EditCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
