import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListClasesComponent } from './list-clases.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ClaseService } from '../../../services/clase/clase.service';
import { from } from 'rxjs';


describe('ListClasesComponent', () => {
  let component: ListClasesComponent;
  let fixture: ComponentFixture<ListClasesComponent>;
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListClasesComponent ],
      imports: [
        HttpClientModule,
        MatDialogModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => { 
    fixture = TestBed.createComponent(ListClasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('El componente debe instanciarse', () => {

    expect(component).toBeDefined();
    expect(component).toBeInstanceOf(ListClasesComponent);
    expect(component.clases.length).toBe(0);

  });

  it('Metodo init debe inializar la lista de las clases', () => {

    component.ngOnInit();
    expect(component.clases.length).toBeGreaterThan(1);
    
  });
 

});
