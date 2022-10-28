import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyPhotographComponent } from './why-photograph.component';

describe('WhyPhotographComponent', () => {
  let component: WhyPhotographComponent;
  let fixture: ComponentFixture<WhyPhotographComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyPhotographComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyPhotographComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
