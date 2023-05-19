import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaialogComponent } from './daialog.component';
import { UsersComponent } from '../users/users.component';
describe('DaialogComponent', () => {
  let component: DaialogComponent;
  let fixture: ComponentFixture<DaialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
