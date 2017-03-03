import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarLibrosAdminComponent } from './listar-libros-admin.component';

describe('ListarLibrosAdminComponent', () => {
  let component: ListarLibrosAdminComponent;
  let fixture: ComponentFixture<ListarLibrosAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarLibrosAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarLibrosAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
