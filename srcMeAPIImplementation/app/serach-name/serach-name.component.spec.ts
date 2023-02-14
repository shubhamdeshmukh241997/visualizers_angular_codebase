import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerachNameComponent } from './serach-name.component';

describe('SerachNameComponent', () => {
  let component: SerachNameComponent;
  let fixture: ComponentFixture<SerachNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerachNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerachNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
