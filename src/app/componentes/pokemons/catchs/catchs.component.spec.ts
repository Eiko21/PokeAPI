import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatchsComponent } from './catchs.component';

describe('CatchsComponent', () => {
  let component: CatchsComponent;
  let fixture: ComponentFixture<CatchsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatchsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatchsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
