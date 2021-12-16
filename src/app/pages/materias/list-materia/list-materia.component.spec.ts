import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMateriaComponent } from './list-materia.component';
import { MaterialModule } from '../../../material/material.module';

describe('ListMateriaComponent', () => {
  let component: ListMateriaComponent;
  let fixture: ComponentFixture<ListMateriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMateriaComponent ],
      imports: [
        MaterialModule,
        HttpClientModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
