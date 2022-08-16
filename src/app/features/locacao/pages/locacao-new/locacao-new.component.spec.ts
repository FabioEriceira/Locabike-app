import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocacaoNewComponent } from './locacao-new.component';

describe('LocacaoNewComponent', () => {
  let component: LocacaoNewComponent;
  let fixture: ComponentFixture<LocacaoNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocacaoNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocacaoNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
