import { TestBed } from '@angular/core/testing';

import { AdminJournalService } from './admin-journal.service';

describe('AdminJournalService', () => {
  let service: AdminJournalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminJournalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
