import { TestBed, inject } from '@angular/core/testing';

import { PopulateTable2Service } from './populate-table2.service';

describe('PopulateTable2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PopulateTable2Service]
    });
  });

  it('should be created', inject([PopulateTable2Service], (service: PopulateTable2Service) => {
    expect(service).toBeTruthy();
  }));
});
