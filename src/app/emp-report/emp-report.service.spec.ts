import { TestBed } from '@angular/core/testing';

import { EmpReportService } from './emp-report.service';

describe('EmpReportService', () => {
  let service: EmpReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
