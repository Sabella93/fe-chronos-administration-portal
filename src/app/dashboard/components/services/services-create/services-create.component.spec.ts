import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesCreateComponent } from './services-create.component';

describe('ServicesCreateComponent', () => {
  let component: ServicesCreateComponent;
  let fixture: ComponentFixture<ServicesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServicesCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
