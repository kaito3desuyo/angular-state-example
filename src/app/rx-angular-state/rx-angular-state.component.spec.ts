import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxAngularStateComponent } from './rx-angular-state.component';

describe('RxAngularStateComponent', () => {
  let component: RxAngularStateComponent;
  let fixture: ComponentFixture<RxAngularStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxAngularStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxAngularStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
