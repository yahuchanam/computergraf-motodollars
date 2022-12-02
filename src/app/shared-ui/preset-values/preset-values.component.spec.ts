import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresetValuesComponent } from './preset-values.component';

describe('PresetValuesComponent', () => {
  let component: PresetValuesComponent;
  let fixture: ComponentFixture<PresetValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresetValuesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PresetValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
