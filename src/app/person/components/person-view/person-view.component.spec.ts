import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PersonViewComponent } from './person-view.component';

describe('PersonViewComponent', () => {
  let component: PersonViewComponent;
  let fixture: ComponentFixture<PersonViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonViewComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { paramMap: convertToParamMap({ id: '1' }) } }
        }
      ],
      imports: [HttpClientTestingModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
