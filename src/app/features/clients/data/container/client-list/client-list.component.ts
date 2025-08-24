import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { RestaurantClient } from '../../models/client.modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [],
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientListComponent {
  private readonly clientsService = inject(ClientsService);
  private readonly router = inject(Router);

  // Usar el signal readonly del servicio
  clients = this.clientsService.clients;

  edit(client: RestaurantClient) {
    console.log(client);
    this.router.navigate(['clients/edit', client.id]);
  }
}
