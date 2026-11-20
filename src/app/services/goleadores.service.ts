import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Goleador } from '../models/futbol.models';

@Injectable({
  providedIn: 'root'
})
export class GoleadoresService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = environment.apiUrl;

  getGoleadores(): Observable<Goleador[]> {
    return this.http.get<Goleador[]>(`${this.baseUrl}/goleadores.json`);
  }
}
