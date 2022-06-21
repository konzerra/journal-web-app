import { TestBed } from '@angular/core/testing';

import { DialogsService } from './dialogs.service';

describe('DialogsServiceService', () => {
  let service: DialogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DialogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
