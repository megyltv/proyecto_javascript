import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompradoresAdminComponent } from './compradores-admin.component';

describe('CompradoresAdminComponent', () => {
  let component: CompradoresAdminComponent;
  let fixture: ComponentFixture<CompradoresAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompradoresAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompradoresAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
