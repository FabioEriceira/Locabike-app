import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipamentoNewComponent } from './equipamento-new.component';

describe('EquipamentoNewComponent', () => {
  let component: EquipamentoNewComponent;
  let fixture: ComponentFixture<EquipamentoNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipamentoNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipamentoNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
