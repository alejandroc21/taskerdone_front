import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Project } from '@core/model/project';
import { BehaviorSubject, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private readonly _httpClient = inject(HttpClient);
  private readonly _apiUrl = `${environment.apiUrl}/projects`;
  private _projects:Project[] = [];
  private _projects$:BehaviorSubject<Project[]> = new BehaviorSubject<Project[]>([]);

  constructor() { }

  getProjects() {
    return this._httpClient.get<Project[]>(`${this._apiUrl}`).pipe(
      tap((res) => {
        this._projects = res;
        this._projects$.next(this._projects);
      })
    )
  }

  createProject(project:Project){
    return this._httpClient.post<Project>(`${this._apiUrl}/create`, project).pipe(
      tap((res)=>{
        this._projects.push(res);
        this._projects$.next(this._projects);
      })
    );
  }

  get projects(){
    return this._projects$.asObservable();
  }
}
