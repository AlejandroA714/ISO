import { Routes } from '@angular/router';
import { MascotasComponent } from './mascotas/mascotas.component';
import { AdopcionFormComponent } from './adoption-form/adoption-form.component';
import { LoginComponent } from './login/login.component';
import { AdoptionRequestsComponent } from './adoption-requests/adoption-requests.component';
import { DetailsComponent } from './details/details.component';
import { MascotasAdminComponent } from './mascotas-admin/mascotas-admin.component';
import { AgregarMascotaComponent } from './mascotas-add/mascotas-add.component';
import { EditarMascotaComponent } from './mascotas-edit/mascotas-edit.component';

export const routes: Routes = [
  { path: '', redirectTo: 'mascotas', pathMatch: 'full' },
  { path: 'mascotas', component: MascotasComponent },
  { path: 'adoptar', component: AdopcionFormComponent },
  { path: 'login', component: LoginComponent},
  { path: 'formularios', component: AdoptionRequestsComponent},
  { path: 'details/:id', component: DetailsComponent},
  { path: 'admin', component: MascotasAdminComponent},
  { path: 'admin/add', component: AgregarMascotaComponent},
  { path: 'admin/editar/:id', component: EditarMascotaComponent}
];
