import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulmaComponent } from './bulma.component';

describe('BulmaComponent', () => {
  let component: BulmaComponent;
  let fixture: ComponentFixture<BulmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
