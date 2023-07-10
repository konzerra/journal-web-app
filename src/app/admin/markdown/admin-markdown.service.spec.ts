import { TestBed } from '@angular/core/testing';

import { AdminMarkdownService } from './admin-markdown.service';

describe('AdminMarkdownService', () => {
  let service: AdminMarkdownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminMarkdownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
