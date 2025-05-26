import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Mascota {
  id?: number;
  nombre: string;
  edad: number;
  estado: string;
  raza: string;
  sexo: string;
  imagen: string; // Base64
}

@Injectable({
  providedIn: 'root'
})
export class MascotaService {
  crearMascota(value: Partial<{ nombre: string | null; edad: null; estado: string | null; }>): Observable<any> {
    return this.http.post(this.apiUrl,{});
  }
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8081/api/mascotas';

  getMascotas(): Observable<any> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getAvailableMascotas(): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}/available`)
  }

  getMascotaPorId(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

}
