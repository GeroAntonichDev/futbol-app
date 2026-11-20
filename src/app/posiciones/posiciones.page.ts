import { Component, OnInit, inject } from '@angular/core';
import { PosicionesService } from '../services/posiciones.service';
import { Posicion } from '../models/futbol.models';

@Component({
  selector: 'app-posiciones',
  templateUrl: './posiciones.page.html',
  styleUrls: ['./posiciones.page.scss'],
  standalone: false,
})
export class PosicionesPage implements OnInit {
  private readonly posicionesService = inject(PosicionesService);
  private readonly colores = ['#3880ff', '#3dc2ff', '#5260ff', '#2dd36f', '#ffc409', '#eb445a', '#92949c'];

  posiciones: Posicion[] = [];
  isLoading = true;
  errorMessage: string | null = null;
  busqueda = '';

  ngOnInit(): void {
    this.cargarPosiciones();
  }

  cargarPosiciones(event?: any): void {
    this.isLoading = true;
    this.errorMessage = null;

    this.posicionesService.getPosiciones().subscribe({
      next: (data) => {
        this.posiciones = data;
        this.isLoading = false;
        if (event) {
          event.target.complete();
        }
      },
      error: () => {
        this.errorMessage =
          'No se pudo cargar la tabla de posiciones. Verificá tu conexión e intentá de nuevo.';
        this.isLoading = false;
        if (event) {
          event.target.complete();
        }
      }
    });
  }

  onBusqueda(event: any): void {
    this.busqueda = event.detail.value ?? '';
  }

  get posicionesFiltradas(): Posicion[] {
    const texto = this.busqueda.trim().toLowerCase();
    if (!texto) {
      return this.posiciones;
    }
    return this.posiciones.filter((fila) => fila.equipo.toLowerCase().includes(texto));
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

  colorPosicion(posicion: number): string {
    if (posicion <= 4) {
      return 'success';
    }
    if (posicion <= 6) {
      return 'warning';
    }
    return 'medium';
  }
}
