import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MascotaService } from '../services/mascota.service';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-agregar-mascota',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './mascotas-add.component.html'
})
export class AgregarMascotaComponent {
  private fb = inject(FormBuilder);
  private mascotaService = inject(MascotaService);
  private router = inject(Router);

  form = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(2)]],
    edad: [null, [Validators.required, Validators.min(0)]],
    estado: ['disponible', [Validators.required]],
    raza: ['', [Validators.required]],
    sexo: ['', [Validators.required]],
    imagen: ['', [Validators.required]]
  });

  guardar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.mascotaService.crearMascota(this.form.value).subscribe({
      next: () => {
        alert('Mascota registrada con éxito');
        this.router.navigate(['/admin/mascotas']);
      },
      error: () => alert('Error al guardar la mascota')
    });
  }

  get f() {
    return this.form.controls;
  }

  // Leer imagen como base64
  onFileChange(event: any) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      this.form.patchValue({ imagen: (reader.result as string).split(',')[1] });
    };
    reader.readAsDataURL(file);
  }
}
