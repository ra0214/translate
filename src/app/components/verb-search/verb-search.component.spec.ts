import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerbSearchComponent } from './verb-search.component';

describe('VerbSearchComponent', () => {
  let component: VerbSearchComponent;
  let fixture: ComponentFixture<VerbSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerbSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerbSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
