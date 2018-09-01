import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocTrackComponent } from './doc-track.component';

describe('DocTrackComponent', () => {
  let component: DocTrackComponent;
  let fixture: ComponentFixture<DocTrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocTrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
