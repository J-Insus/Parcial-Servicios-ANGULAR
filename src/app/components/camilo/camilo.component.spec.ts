import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamiloComponent } from './camilo.component';

describe('CamiloComponent', () => {
  let component: CamiloComponent;
  let fixture: ComponentFixture<CamiloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CamiloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CamiloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
