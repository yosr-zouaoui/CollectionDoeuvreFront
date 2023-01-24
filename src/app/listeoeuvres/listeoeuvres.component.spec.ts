import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeoeuvresComponent } from './listeoeuvres.component';

describe('ListeoeuvresComponent', () => {
  let component: ListeoeuvresComponent;
  let fixture: ComponentFixture<ListeoeuvresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeoeuvresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeoeuvresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
