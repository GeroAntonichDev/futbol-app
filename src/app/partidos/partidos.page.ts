import { Component, OnInit, inject } from '@angular/core';
import { PartidosService } from '../services/partidos.service';
import { Partido } from '../models/futbol.models';

@Component({
  selector: 'app-partidos',
  templateUrl: './partidos.page.html',
  styleUrls: ['./partidos.page.scss'],
  standalone: false,
})
export class PartidosPage implements OnInit {
  private readonly partidosService = inject(PartidosService);
  private readonly colores = ['#3880ff', '#3dc2ff', '#5260ff', '#2dd36f', '#ffc409', '#eb445a', '#92949c'];

  partidos: Partido[] = [];
  isLoading = true;
  errorMessage: string | null = null;
  filtroEstado = 'todos';
  busqueda = '';

  ngOnInit(): void {
    this.cargarPartidos();
  }

  cargarPartidos(event?: any): void {
    this.isLoading = true;
    this.errorMessage = null;

    this.partidosService.getPartidos().subscribe({
      next: (data) => {
        this.partidos = data;
        this.isLoading = false;
        if (event) {
          event.target.complete();
        }
      },
      error: () => {
        this.errorMessage =
          'No se pudieron cargar los partidos. Verificá tu conexión e intentá de nuevo.';
        this.isLoading = false;
        if (event) {
          event.target.complete();
        }
      }
    });
  }

  onFiltroChange(event: any): void {
    this.filtroEstado = event.detail.value;
  }

  onBusqueda(event: any): void {
    this.busqueda = event.detail.value ?? '';
  }

  get partidosFiltrados(): Partido[] {
    const texto = this.busqueda.trim().toLowerCase();
    return this.partidos.filter((partido) => {
      const coincideEstado =
        this.filtroEstado === 'todos' || partido.estado === this.filtroEstado;
      const coincideTexto =
        !texto ||
        partido.local.toLowerCase().includes(texto) ||
        partido.visitante.toLowerCase().includes(texto);
      return coincideEstado && coincideTexto;
    });
  }

  estadoTexto(partido: Partido): string {
    switch (partido.estado) {
      case 'en_vivo':
        return `EN VIVO · ${partido.minuto}`;
      case 'finalizado':
        return 'FINALIZADO';
      default:
        return `PRÓXIMO · ${partido.fecha}`;
    }
  }

  estadoColor(estado: string): string {
    switch (estado) {
      case 'en_vivo':
        return 'danger';
      case 'finalizado':
        return 'medium';
      default:
        return 'primary';
    }
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
