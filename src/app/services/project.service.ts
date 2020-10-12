import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../models/project.model';

@Injectable({ providedIn: 'root' })
export class ProjectService {
  get(): Observable<Project[]> {
    return of([
      {
        name: 'Support of Angular',
        customer: 'Müller AG',
        duration: 25
      },
      {
        name: 'App Modernization',
        customer: 'Meyer AG',
        duration: 148
      },
      {
        name: 'Move App to Azure',
        customer: 'Foobar AG',
        duration: 18
      }
    ]);
  }
}
