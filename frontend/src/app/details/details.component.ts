import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MascotaService } from '../services/mascota.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {

   private route = inject(ActivatedRoute);
   private mascotaService = inject(MascotaService);

  mascota: any = null;
  id: number | null = null;

    ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    console.log('ID obtenido de la ruta:', this.id);

       this.mascotaService.getMascotaPorId(this.id).subscribe({
      next: (data) => {
        console.log(data);
        this.mascota = data},
      error: () => alert('Mascota no encontrada')
    });

  }
}
