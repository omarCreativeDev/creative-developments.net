import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISkillGroup } from '@core/model/interfaces';
import { environment } from '@env/environment';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MySkillsSummaryService {
  public activeGroup$: BehaviorSubject<ISkillGroup | null> =
    new BehaviorSubject<ISkillGroup | null>(null);
  public groups$: BehaviorSubject<ISkillGroup[]> = new BehaviorSubject<ISkillGroup[]>([]);

  constructor(private http: HttpClient) {}

  public list(): Observable<any> {
    return this.http.get<any>(`${environment.url}/skills`);
  }
}
