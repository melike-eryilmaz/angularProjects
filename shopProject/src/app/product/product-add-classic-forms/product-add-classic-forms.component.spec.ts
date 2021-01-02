import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAddClassicFormsComponent } from './product-add-classic-forms.component';

describe('ProductAddClassicFormsComponent', () => {
  let component: ProductAddClassicFormsComponent;
  let fixture: ComponentFixture<ProductAddClassicFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductAddClassicFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAddClassicFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
