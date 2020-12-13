import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkitaStateComponent } from './akita-state.component';

describe('AkitaStateComponent', () => {
  let component: AkitaStateComponent;
  let fixture: ComponentFixture<AkitaStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AkitaStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AkitaStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
