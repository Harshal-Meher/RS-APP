import { TestBed } from '@angular/core/testing';

import { FilterCoursesService } from './filter-courses.service';

describe('FilterCoursesService', () => {
  let service: FilterCoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterCoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
