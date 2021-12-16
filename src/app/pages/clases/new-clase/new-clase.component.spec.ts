import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MaterialModule } from 'src/app/material/material.module';

import { NewClaseComponent } from './new-clase.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ClaseService } from 'src/app/services/clase/clase.service';

describe('NewClaseComponent', () => {
  let component: NewClaseComponent;
  let fixture: ComponentFixture<NewClaseComponent>;
  const servicio =  ClaseService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewClaseComponent ],
      imports: [
        ReactiveFormsModule,
        MaterialModule, 
        HttpClientModule,      
        BrowserAnimationsModule,
        NoopAnimationsModule
      ],
      providers: [ 
      { provide: MAT_DIALOG_DATA, useValue: {} },
      { provide: MatDialogRef, useValue: {} } ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewClaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  

  // it('debe de llamar al servido para agregar ', () => {

  //   spyOn( servicio)
  //   component.guardar()

  // });

});
