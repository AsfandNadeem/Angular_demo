import { TestBed, inject } from '@angular/core/testing';

import { PopulateTableService } from './populate-table.service';

describe('PopulateTableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PopulateTableService]
    });
  });

  it('should be created', inject([PopulateTableService], (service: PopulateTableService) => {
    expect(service).toBeTruthy();
  }));
});
