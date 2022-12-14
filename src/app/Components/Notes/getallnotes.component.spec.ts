import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetNotesComponent } from './getallnotes.component';

describe('GetNotesComponent', () => {
  let component: GetNotesComponent;
  let fixture: ComponentFixture<GetNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
