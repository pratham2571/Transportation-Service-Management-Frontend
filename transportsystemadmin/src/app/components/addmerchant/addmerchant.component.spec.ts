import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmerchantComponent } from './addmerchant.component';

describe('AddmerchantComponent', () => {
  let component: AddmerchantComponent;
  let fixture: ComponentFixture<AddmerchantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddmerchantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddmerchantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
