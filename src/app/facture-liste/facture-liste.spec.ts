import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactureListe } from './facture-liste';

describe('FactureListe', () => {
  let component: FactureListe;
  let fixture: ComponentFixture<FactureListe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FactureListe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FactureListe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
