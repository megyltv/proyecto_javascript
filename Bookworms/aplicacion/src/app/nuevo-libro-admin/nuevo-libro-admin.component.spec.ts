import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoLibroAdminComponent } from './nuevo-libro-admin.component';

describe('NuevoLibroAdminComponent', () => {
  let component: NuevoLibroAdminComponent;
  let fixture: ComponentFixture<NuevoLibroAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoLibroAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoLibroAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
