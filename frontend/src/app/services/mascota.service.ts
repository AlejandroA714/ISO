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

  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8081/api/mascotas';

  crearMascota(value: Mascota): Observable<any> {
    console.log(value);
    return this.http.post(this.apiUrl,value);
  }

  actualizarMascota(id: number, mascota: any): Observable<any> {
  return this.http.put(`${this.apiUrl}/${id}`, mascota);
}
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
