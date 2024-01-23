import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodslistComponent } from './goodslist.component';

describe('GoodslistComponent', () => {
  let component: GoodslistComponent;
  let fixture: ComponentFixture<GoodslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GoodslistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GoodslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
