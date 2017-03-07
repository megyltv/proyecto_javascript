import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEntradasAdminComponent } from './listar-entradas-admin.component';

describe('ListarEntradasAdminComponent', () => {
  let component: ListarEntradasAdminComponent;
  let fixture: ComponentFixture<ListarEntradasAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarEntradasAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarEntradasAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
