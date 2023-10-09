import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerAddProComponent } from './seller-add-pro.component';

describe('SellerAddProComponent', () => {
  let component: SellerAddProComponent;
  let fixture: ComponentFixture<SellerAddProComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellerAddProComponent]
    });
    fixture = TestBed.createComponent(SellerAddProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
