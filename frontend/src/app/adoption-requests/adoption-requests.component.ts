import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdoptionService } from '../services/adoption.service';

@Component({
  standalone: true,
  selector: 'app-adoption-requests',
  imports: [CommonModule],
  templateUrl: './adoption-requests.component.html'
})
export class AdoptionRequestsComponent implements OnInit {
  private adoptionService = inject(AdoptionService);
  requests: any[] = [];

  ngOnInit() {
    this.adoptionService.getSolicitudes().subscribe({
      next: (data) => {
        console.log(data);
        this.requests = data},
      error: () => alert('Error al obtener solicitudes')
    });
  }

  eliminar(id: number) {
  if (confirm('¿Estás seguro de que deseas eliminar esta solicitud?')) {
    this.adoptionService.deleteSolicitud(id).subscribe({
      next: () => {
        this.requests = this.requests.filter(r => r.id !== id);
        location.reload();
        alert('Solicitud eliminada');
      },
      error: () => alert('Error al eliminar la solicitud')
    });
  }
}
}
