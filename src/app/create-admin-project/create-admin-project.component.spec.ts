import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAdminProjectComponent } from './create-admin-project.component';

describe('CreateAdminProjectComponent', () => {
  let component: CreateAdminProjectComponent;
  let fixture: ComponentFixture<CreateAdminProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAdminProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAdminProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
