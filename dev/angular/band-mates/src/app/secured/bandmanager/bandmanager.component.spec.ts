import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandmanagerComponent } from './bandmanager.component';

describe('BandmanagerComponent', () => {
  let component: BandmanagerComponent;
  let fixture: ComponentFixture<BandmanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandmanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
