import { Component, input, output, inject } from '@angular/core';
import { RestaurantClient } from '../../data/models/client.modal';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-client-form',
  imports: [ReactiveFormsModule],
  templateUrl: './client-form.component.html',
  styleUrl: './client-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientFormComponent {
  // Usar output() function en lugar de @Output decorator
  clientCreated = output<RestaurantClient>();
  
  // Usar inject() function en lugar de constructor injection
  private fb = inject(FormBuilder);
  
  form = this.createRestaurantClientForm();

  createRestaurantClientForm(): FormGroup {
    return this.fb.group({
      id: [''],
      name: ['', Validators.required],
      contact: this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', Validators.required]
      }),
      address: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        country: ['', Validators.required],
        postalCode: ['']
      }),
      status: ['active', Validators.required],
      createdAt: [null],
      updatedAt: [null],
      users: [[]]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const clientData = this.form.value;
      this.clientCreated.emit(clientData);
    } else {
      this.form.markAllAsTouched();
      console.log('Formulario inválido');
    }
  }
}
