import { Routes } from '@angular/router';
import { MascotasComponent } from './mascotas/mascotas.component';

export const routes: Routes = [
  { path: '', redirectTo: 'mascotas', pathMatch: 'full' },
  { path: 'mascotas', component: MascotasComponent }
];
