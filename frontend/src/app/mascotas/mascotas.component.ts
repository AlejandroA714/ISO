import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

const API_URL = 'http://localhost:8081/api/mascotas';

@Component({
  selector: 'app-mascotas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.css']
})
export class MascotasComponent implements OnInit {
  mascotas: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.cargarMascotas();
  }

  cargarMascotas() {
    this.http.get<any[]>(API_URL)
      .subscribe(data => this.mascotas = data);
  }
}
