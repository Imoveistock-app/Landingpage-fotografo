import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportantImageComponent } from './important-image.component';

describe('ImportantImageComponent', () => {
  let component: ImportantImageComponent;
  let fixture: ComponentFixture<ImportantImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportantImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportantImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
