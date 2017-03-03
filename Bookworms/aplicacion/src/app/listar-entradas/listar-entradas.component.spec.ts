import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEntradasComponent } from './listar-entradas.component';

describe('ListarEntradasComponent', () => {
  let component: ListarEntradasComponent;
  let fixture: ComponentFixture<ListarEntradasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarEntradasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarEntradasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
