import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MascotaService } from '../services/mascota.service';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-mascotas-admin',
  imports: [CommonModule],
  templateUrl: './mascotas-admin.component.html'
})
export class MascotasAdminComponent implements OnInit {
  private mascotaService = inject(MascotaService);
  private router = inject(Router);

  mascotas: any = [];

  ngOnInit(): void {
    this.mascotaService.getMascotas().subscribe({
      next: (data) => {
        console.log(data);
        this.mascotas = data;
      },
      error: () => alert('Error al cargar mascotas')
    });
  }

  editar(id: number) {
    this.router.navigate(['/admin/editar', id]);
  }

  agregar() {
    this.router.navigate(['/admin/add']);
  }
}
