import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EMAIL_PATTERN, PHONE_PATTERN } from '@core/constants/constants';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  public form: FormGroup;
  public submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.setupForm();
  }

  private setupForm(): void {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      email: ['', [Validators.required, Validators.pattern(EMAIL_PATTERN), Validators.maxLength(120)]],
      phone: ['', [Validators.required, Validators.pattern(PHONE_PATTERN)]],
      message: ['', [Validators.required], Validators.maxLength(500)],
    });
  }

  public onSubmit(): void {
    this.submitted = true;
  }
}
