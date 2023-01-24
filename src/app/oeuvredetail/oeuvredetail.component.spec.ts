import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OeuvredetailComponent } from './oeuvredetail.component';

describe('OeuvredetailComponent', () => {
  let component: OeuvredetailComponent;
  let fixture: ComponentFixture<OeuvredetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OeuvredetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OeuvredetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
