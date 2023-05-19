import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaialogContentComponent } from './daialog-content.component';

describe('DaialogContentComponent', () => {
  let component: DaialogContentComponent;
  let fixture: ComponentFixture<DaialogContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaialogContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaialogContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
