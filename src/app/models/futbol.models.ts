export type EstadoPartido = 'en_vivo' | 'proximo' | 'finalizado';

export interface Partido {
  id: number;
  local: string;
  visitante: string;
  goles_local: number;
  goles_visitante: number;
  estado: EstadoPartido;
  minuto: string;
  fecha: string;
  estadio: string;
}

export interface Posicion {
  posicion: number;
  equipo: string;
  pj: number;
  pg: number;
  pe: number;
  pp: number;
  gf: number;
  gc: number;
  dg: number;
  pts: number;
}

export interface Goleador {
  nombre: string;
  equipo: string;
  goles: number;
  asistencias: number;
  partidos: number;
}
