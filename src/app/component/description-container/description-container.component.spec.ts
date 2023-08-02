import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionContainerComponent } from './description-container.component';

describe('DescriptionContainerComponent', () => {
  let component: DescriptionContainerComponent;
  let fixture: ComponentFixture<DescriptionContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DescriptionContainerComponent]
    });
    fixture = TestBed.createComponent(DescriptionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
