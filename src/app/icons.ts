import { addIcons } from 'ionicons';
import {
  alertCircleOutline,
  calendarOutline,
  footballOutline,
  handLeftOutline,
  locationOutline,
  refreshOutline,
  shirtOutline,
  starOutline,
  trophyOutline,
} from 'ionicons/icons';

// Registra localmente solo los íconos que usa la app.
// Así <ion-icon> no hace una petición HTTP por cada ícono.
export function registerIcons(): void {
  addIcons({
    alertCircleOutline,
    calendarOutline,
    footballOutline,
    handLeftOutline,
    locationOutline,
    refreshOutline,
    shirtOutline,
    starOutline,
    trophyOutline,
  });
}
