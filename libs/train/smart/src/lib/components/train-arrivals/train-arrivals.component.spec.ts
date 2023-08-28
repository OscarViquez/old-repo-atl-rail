import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrainArrivalsComponent } from './train-arrivals.component';
import { SidebarModule } from '@shared';

describe('TrainArrivalsComponent', () => {
  let component: TrainArrivalsComponent;
  let fixture: ComponentFixture<TrainArrivalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainArrivalsComponent, SidebarModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TrainArrivalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
