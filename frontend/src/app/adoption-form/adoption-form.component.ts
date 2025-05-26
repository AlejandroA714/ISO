import { Component, inject, OnInit, computed, signal } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AdoptionForm, AdoptionService } from '../services/adoption.service';
import { MascotaService } from '../services/mascota.service';

@Component({
  standalone: true,
  selector: 'app-adopcion-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './adoption-form.component.html'
})
export class AdopcionFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  private adoptionService = inject(AdoptionService);
  private mascotaService = inject(MascotaService);

  mascotas = signal<{ id: number; nombre: string }[]>([]); // lista para el select

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^\d{4}-\d{4}$/)]],
    idMascota: [0, Validators.required],
    message: ['']
  });

  ngOnInit() {
    this.mascotaService.getAvailableMascotas().subscribe({
      next: (data) => this.mascotas.set(data),
      error: () => alert('Error al cargar mascotas')
    });
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      console.log("Invalid");
      return;
    }

    this.adoptionService.submitForm(this.form.getRawValue() as AdoptionForm).subscribe({
      next: () => {
        alert('Formulario enviado exitosamente');
        location.reload();
      },
      error: () => alert('Error al enviar formulario')
    });
  }
}
