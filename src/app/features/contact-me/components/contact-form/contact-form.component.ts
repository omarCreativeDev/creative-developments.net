import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from "@angular/forms";
import { EMAIL_PATTERN, PHONE_PATTERN } from '@core/constants/constants';
import { IErrorDefinition, IErrorDetails } from '@core/model/interfaces';
import { filter } from 'lodash';
import { EmailService } from '@core/services/email/email.service';
import { finalize, take } from 'rxjs/operators';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  private emailCharacterLimit = 120;
  private messageCharacterLimit = 500;
  private nameCharacterLimit = 120;
  private phoneCharacterLimit = 120;
  public form: FormGroup;
  public formErrorsMap: IErrorDetails[];
  public messageSent = false;
  public sendingMessage = false;
  public submitted = false;

  constructor(private formBuilder: FormBuilder, private emailService: EmailService) {}

  ngOnInit() {
    this.setupForm();
    this.setupFormErrors();
  }

  private setupFormErrors(): void {
    this.formErrorsMap = [
      {
        item: 'name',
        type: [
          {
            name: 'required',
            message: 'Please enter your name.',
          },
          {
            name: 'maxlength',
            message: `${this.nameCharacterLimit} character limit exceeded.`,
          },
        ],
      },
      {
        item: 'email',
        type: [
          {
            name: 'required',
            message: 'Please enter your email.',
          },
          {
            name: 'pattern',
            message: 'Please enter a valid email.',
          },
          {
            name: 'maxlength',
            message: `${this.nameCharacterLimit} character limit exceeded.`,
          },
        ],
      },
      {
        item: 'phone',
        type: [
          {
            name: 'required',
            message: 'Please enter your phone number.',
          },
          {
            name: 'pattern',
            message: 'Please enter a valid phone number.',
          },
          {
            name: 'maxlength',
            message: `${this.phoneCharacterLimit} character limit exceeded.`,
          },
        ],
      },
      {
        item: 'message',
        type: [
          {
            name: 'required',
            message: 'Please enter your message.',
          },
          {
            name: 'maxlength',
            message: `${this.messageCharacterLimit} character limit exceeded.`,
          },
        ],
      },
    ];
  }

  private setupForm(): void {
    this.form = this.formBuilder.group({
      name: [null, [Validators.required, Validators.maxLength(this.nameCharacterLimit)]],
      email: [
        '',
        [Validators.required, Validators.pattern(EMAIL_PATTERN), Validators.maxLength(this.emailCharacterLimit)],
      ],
      phone: [
        '',
        [Validators.required, Validators.pattern(PHONE_PATTERN), Validators.maxLength(this.phoneCharacterLimit)],
      ],
      message: ['', [Validators.required, Validators.maxLength(this.messageCharacterLimit)]],
    });
  }

  public onSubmit(): void {
    this.submitted = true;

    if (this.form.valid) {
      this.sendingMessage = true;

      this.emailService
        .send(this.form.value)
        .pipe(
          take(1),
          finalize(() => {
            this.sendingMessage = false;
            this.submitted = false;
          })
        )
        .subscribe(() => {
          this.messageSent = true;

          setTimeout(() => {
            this.messageSent = false;
            this.form.reset();
          }, 2000);
        });
    }
  }

  public getFormControlErrors(formControlName: string): ValidationErrors | null {
    return this.form.get(formControlName)?.errors || null;
  }

  public getFirstErrorMessage(formControlName: string): string | null {
    const errors = this.form.get(formControlName)?.errors;

    if (!errors) {
      return null;
    }

    const errorType: string = Object.keys(errors)[0];
    const errorDefinitions: IErrorDefinition[] = filter(this.formErrorsMap, ['item', formControlName])[0].type;
    return filter(errorDefinitions, ['name', errorType])[0].message;
  }
}
