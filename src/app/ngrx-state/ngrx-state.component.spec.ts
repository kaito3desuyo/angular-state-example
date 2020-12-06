import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxStateComponent } from './ngrx-state.component';

describe('NgrxStateComponent', () => {
  let component: NgrxStateComponent;
  let fixture: ComponentFixture<NgrxStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrxStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
