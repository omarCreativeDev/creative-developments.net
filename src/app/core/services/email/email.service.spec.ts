import { TestBed } from '@angular/core/testing';
import { EmailService } from './email.service';
export class EmailServiceMock {}

describe('EmailService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [{ provide: EmailService, useClass: EmailServiceMock }],
    })
  );

  it('should be created', () => {
    const service: EmailService = TestBed.inject(EmailService);
    expect(service).toBeTruthy();
  });
});
