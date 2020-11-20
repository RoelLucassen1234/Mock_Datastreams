import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiemcomponentComponent } from './biemcomponent.component';

describe('BiemcomponentComponent', () => {
  let component: BiemcomponentComponent;
  let fixture: ComponentFixture<BiemcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiemcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiemcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
