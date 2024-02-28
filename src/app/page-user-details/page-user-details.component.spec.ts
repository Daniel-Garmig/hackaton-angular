import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUserDetailsComponent } from './page-user-details.component';

describe('PageUserDetailsComponent', () => {
  let component: PageUserDetailsComponent;
  let fixture: ComponentFixture<PageUserDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageUserDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
