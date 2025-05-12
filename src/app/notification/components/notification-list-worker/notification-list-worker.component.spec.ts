import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationListWorkerComponent } from './notification-list-worker.component';

describe('NotificationListWorkerComponent', () => {
  let component: NotificationListWorkerComponent;
  let fixture: ComponentFixture<NotificationListWorkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationListWorkerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationListWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
