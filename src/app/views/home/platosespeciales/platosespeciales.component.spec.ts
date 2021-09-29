import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatosespecialesComponent } from './platosespeciales.component';

describe('PlatosespecialesComponent', () => {
  let component: PlatosespecialesComponent;
  let fixture: ComponentFixture<PlatosespecialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatosespecialesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatosespecialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
