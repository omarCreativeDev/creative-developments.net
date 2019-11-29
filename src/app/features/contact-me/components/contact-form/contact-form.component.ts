import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EMAIL_PATTERN, PHONE_PATTERN } from '@core/constants/constants';
import { ErrorDefinition, ErrorDetails } from '@core/model/interfaces';
import { filter } from 'lodash';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
})
export class ContactFormComponent implements OnInit {
  public form: FormGroup;
  public submitted = false;
  public formErrorsMap: ErrorDetails[];
  private nameCharacterLimit = 120;
  private emailCharacterLimit = 120;
  private phoneCharacterLimit = 120;
  private messageCharacterLimit = 500;

  constructor(private formBuilder: FormBuilder) {}

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
      message: ['', [Validators.required], Validators.maxLength(this.messageCharacterLimit)],
    });
  }

  public onSubmit(): void {
    this.submitted = true;
  }

  public getFirstErrorMessage(formControlName: string): string {
    const errorType: string = Object.keys(this.form.get(formControlName).errors)[0];
    const errorDefinitions: ErrorDefinition[] = filter(this.formErrorsMap, ['item', formControlName])[0].type;
    return filter(errorDefinitions, ['name', errorType])[0].message;
  }
}
