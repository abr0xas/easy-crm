import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { ClientFormComponent } from '../../../ui/client-form/client-form.component';
import { RestaurantClient } from '../../models/client.modal';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-client-create',
  standalone: true,
  imports: [ClientFormComponent],
  templateUrl: './client-create.component.html',
  styleUrl: './client-create.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientCreateComponent {
  private clientsService = inject(ClientsService);

  onClientCreated(clientData: Omit<RestaurantClient, 'id' | 'createdAt' | 'updatedAt'>) {
    console.log('Creando cliente:', clientData);
    
    this.clientsService.createClient(clientData).subscribe({
      next: (client) => {
        console.log('✅ Cliente creado exitosamente:', client);
        // TODO: Navegación o mensaje de éxito
      },
      error: (error) => {
        console.error('❌ Error al crear cliente:', error);
        // TODO: Mostrar mensaje de error
      }
    });
  }
}
