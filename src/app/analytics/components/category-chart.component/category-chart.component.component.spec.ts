import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryChartComponentComponent } from './category-chart.component.component';

describe('CategoryChartComponentComponent', () => {
  let component: CategoryChartComponentComponent;
  let fixture: ComponentFixture<CategoryChartComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryChartComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryChartComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
