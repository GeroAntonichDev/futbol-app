import { Component, OnInit, inject } from '@angular/core';
import { GoleadoresService } from '../services/goleadores.service';
import { Goleador } from '../models/futbol.models';

@Component({
  selector: 'app-goleadores',
  templateUrl: './goleadores.page.html',
  styleUrls: ['./goleadores.page.scss'],
  standalone: false,
})
export class GoleadoresPage implements OnInit {
  private readonly goleadoresService = inject(GoleadoresService);
  private readonly colores = ['#3880ff', '#3dc2ff', '#5260ff', '#2dd36f', '#ffc409', '#eb445a', '#92949c'];

  goleadores: Goleador[] = [];
  isLoading = true;
  errorMessage: string | null = null;
  criterio: 'goles' | 'asistencias' = 'goles';
  toastOpen = false;
  toastMessage = '';

  ngOnInit(): void {
    this.cargarGoleadores();
  }

  cargarGoleadores(event?: any): void {
    this.isLoading = true;
    this.errorMessage = null;

    this.goleadoresService.getGoleadores().subscribe({
      next: (data) => {
        this.goleadores = data;
        this.isLoading = false;
        if (event) {
          event.target.complete();
        }
      },
      error: () => {
        this.errorMessage =
          'No se pudo cargar la tabla de goleadores. Verificá tu conexión e intentá de nuevo.';
        this.isLoading = false;
        if (event) {
          event.target.complete();
        }
      }
    });
  }

  onCriterioChange(event: any): void {
    this.criterio = event.detail.value;
  }

  get goleadoresOrdenados(): Goleador[] {
    return [...this.goleadores].sort((a, b) =>
      this.criterio === 'goles' ? b.goles - a.goles : b.asistencias - a.asistencias
    );
  }

  votar(jugador: Goleador): void {
    this.toastMessage = `¡Votaste por ${jugador.nombre} como jugador de la fecha!`;
    this.toastOpen = true;
  }

  getInitials(nombre: string): string {
    return nombre
      .split(' ')
      .slice(0, 2)
      .map((palabra) => palabra.charAt(0))
      .join('')
      .toUpperCase();
  }

  getColor(nombre: string): string {
    let suma = 0;
    for (let i = 0; i < nombre.length; i++) {
      suma += nombre.charCodeAt(i);
    }
    return this.colores[suma % this.colores.length];
  }
}
