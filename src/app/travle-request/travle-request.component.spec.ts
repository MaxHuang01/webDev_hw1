import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravleRequestComponent } from './travle-request.component';

describe('TravleRequestComponent', () => {
  let component: TravleRequestComponent;
  let fixture: ComponentFixture<TravleRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravleRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravleRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
