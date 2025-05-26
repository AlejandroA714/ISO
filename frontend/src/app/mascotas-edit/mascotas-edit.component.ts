import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MascotaService } from '../services/mascota.service';

@Component({
  standalone: true,
  selector: 'app-editar-mascota',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './mascotas-edit.component.html'
})
export class EditarMascotaComponent implements OnInit {
  private fb = inject(FormBuilder);
  private mascotaService = inject(MascotaService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  imagenPrevia: string | null = null;

  form = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(2)]],
    edad: [0, [Validators.required, Validators.min(0)]],
    estado: ['disponible', [Validators.required]],
    raza: ['', [Validators.required]],
    sexo: ['', [Validators.required]],
    imagen: ['']
  });

  id!: number;

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.mascotaService.getMascotaPorId(this.id).subscribe({
      next: (data) => {
        this.form.patchValue(data);
        this.imagenPrevia = data.imagen; // guardar imagen original
      },
      error: () => alert('Error al cargar la mascota')
    });
  }

  guardar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.mascotaService.actualizarMascota(this.id, this.form.value).subscribe({
      next: () => {
        alert('Mascota actualizada correctamente');
        this.router.navigate(['/admin']);
      },
      error: () => alert('Error al actualizar')
    });
  }

  get f() {
    return this.form.controls;
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const base64 = (reader.result as string).split(',')[1];
      this.form.patchValue({ imagen: base64 });
      this.imagenPrevia = base64; // actualizar vista previa
    };
    reader.readAsDataURL(file);
  }
}
