import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { RestaurantClient } from '../../models/client.modal';

@Component({
  selector: 'app-client-list',
  imports: [],
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientListComponent {
  private clientsService = inject(ClientsService);
  
  // Usar el signal readonly del servicio
  clients = this.clientsService.clients;
}
