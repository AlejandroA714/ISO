import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface AdoptionForm {
  name: string;
  email: string;
  phone: string;
  idMascota: number;
  message?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AdoptionService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8081/api/formularios';

  submitForm(form: AdoptionForm): Observable<any> {
    console.log(form);
    return this.http.post(this.apiUrl, form);
  }

  getSolicitudes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  deleteSolicitud(id: number): Observable<any> {
  return this.http.delete(`${this.apiUrl}/${id}`);
}

}
