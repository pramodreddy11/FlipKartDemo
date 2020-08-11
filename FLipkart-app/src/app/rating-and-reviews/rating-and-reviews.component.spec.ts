import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingAndReviewsComponent } from './rating-and-reviews.component';

describe('RatingAndReviewsComponent', () => {
  let component: RatingAndReviewsComponent;
  let fixture: ComponentFixture<RatingAndReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingAndReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingAndReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
