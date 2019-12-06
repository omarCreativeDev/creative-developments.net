import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IContactForm } from '@core/model/interfaces';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor(private http: HttpClient) {}

  public send(data: IContactForm): Observable<any> {
    return this.http.post<any>(`${environment.url}/sendEmail`, data);
  }
}
