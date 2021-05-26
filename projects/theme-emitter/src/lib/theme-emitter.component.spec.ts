import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeEmitterComponent } from './theme-emitter.component';

describe('ThemeEmitterComponent', () => {
  let component: ThemeEmitterComponent;
  let fixture: ComponentFixture<ThemeEmitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeEmitterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeEmitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
