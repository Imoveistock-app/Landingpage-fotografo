import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubWithusComponent } from './sub-withus.component';

describe('SubWithusComponent', () => {
  let component: SubWithusComponent;
  let fixture: ComponentFixture<SubWithusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubWithusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubWithusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
