import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Posicion } from '../models/futbol.models';

@Injectable({
  providedIn: 'root'
})
export class PosicionesService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = environment.apiUrl;

  getPosiciones(): Observable<Posicion[]> {
    return this.http.get<Posicion[]>(`${this.baseUrl}/posiciones.json`);
  }
}
