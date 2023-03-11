import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RickMorthyComponent } from './rick-morthy.component';

describe('RickMorthyComponent', () => {
  let component: RickMorthyComponent;
  let fixture: ComponentFixture<RickMorthyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RickMorthyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RickMorthyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
