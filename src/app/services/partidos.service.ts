import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Partido } from '../models/futbol.models';

@Injectable({
  providedIn: 'root'
})
export class PartidosService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = environment.apiUrl;

  getPartidos(): Observable<Partido[]> {
    return this.http.get<Partido[]>(`${this.baseUrl}/partidos.json`);
  }
}
