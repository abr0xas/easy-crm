import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { ClientFormComponent } from '../../../ui/client-form/client-form.component';
import { RestaurantClient } from '../../models/client.modal';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-client-create',
  imports: [ClientFormComponent],
  templateUrl: './client-create.component.html',
  styleUrl: './client-create.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientCreateComponent {
  // Usar inject() function en lugar de constructor injection
  private clientsService = inject(ClientsService);

  onClientCreated(clientData: Omit<RestaurantClient, 'id' | 'createdAt' | 'updatedAt'>) {
    console.log('Cliente a crear:', clientData);
    
    this.clientsService.createClient(clientData).subscribe({
      next: (client) => {
        console.log('Cliente creado exitosamente:', client);
        // TODO: Navegación a lista de clientes o mostrar mensaje de éxito
      },
      error: (error) => {
        console.error('Error al crear cliente:', error);
        // TODO: Mostrar mensaje de error
      }
    });
  }
}
