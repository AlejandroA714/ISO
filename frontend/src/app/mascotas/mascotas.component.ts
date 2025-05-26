import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MascotaService } from '../services/mascota.service';

const API_URL = 'http://localhost:8081/api/mascotas';

@Component({
  selector: 'app-mascotas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.css']
})
export class MascotasComponent implements OnInit {
  private mascotaService = inject(MascotaService);

  mascotas: any[] = [];

  ngOnInit() {
      this.mascotaService.getAvailableMascotas()
      .subscribe(x => this.mascotas = x);
  }

}
