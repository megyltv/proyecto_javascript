import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarFrasesComponent } from './listar-frases.component';

describe('ListarFrasesComponent', () => {
  let component: ListarFrasesComponent;
  let fixture: ComponentFixture<ListarFrasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarFrasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarFrasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
