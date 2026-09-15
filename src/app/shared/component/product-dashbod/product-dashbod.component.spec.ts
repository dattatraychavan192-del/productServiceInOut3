import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDashbodComponent } from './product-dashbod.component';

describe('ProductDashbodComponent', () => {
  let component: ProductDashbodComponent;
  let fixture: ComponentFixture<ProductDashbodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDashbodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDashbodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
