import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextLegalComponent } from './text-legal.component';

describe('TextLegalComponent', () => {
  let component: TextLegalComponent;
  let fixture: ComponentFixture<TextLegalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextLegalComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TextLegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
