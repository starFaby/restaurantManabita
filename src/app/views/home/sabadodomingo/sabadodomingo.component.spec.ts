import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SabadodomingoComponent } from './sabadodomingo.component';

describe('SabadodomingoComponent', () => {
  let component: SabadodomingoComponent;
  let fixture: ComponentFixture<SabadodomingoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SabadodomingoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SabadodomingoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
