import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { RestaurantClient } from '../models/client.modal';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  
  // Simulación de base de datos en memoria
  private clients: RestaurantClient[] = [
    {
      id: '1',
      name: 'Restaurante Ejemplo',
      contact: {
        name: 'Juan Pérez',
        email: 'juan@restaurante.com',
        phone: '+1234567890'
      },
      address: {
        street: 'Calle Principal 123',
        city: 'Ciudad Ejemplo',
        country: 'País Ejemplo',
        postalCode: '12345'
      },
      status: 'active',
      createdAt: new Date() as any,
      updatedAt: new Date()
    }
  ];

  // CREATE - Crear un nuevo cliente
  createClient(clientData: Omit<RestaurantClient, 'id' | 'createdAt' | 'updatedAt'>): Observable<RestaurantClient> {
    const newClient: RestaurantClient = {
      ...clientData,
      id: this.generateId(),
      createdAt: new Date() as any,
      updatedAt: new Date()
    };

    this.clients.push(newClient);

    sessionStorage.setItem('clients', JSON.stringify(this.clients))
    
    return of(newClient).pipe(delay(500));
  }

  // READ - Obtener todos los clientes
  getAllClients(): Observable<RestaurantClient[]> {
    const clients = sessionStorage.getItem('clients')
    if (clients) {
      this.clients = JSON.parse(clients)
    }
    return of([...this.clients]).pipe(delay(300));
  }

  // READ - Obtener un cliente por ID
  getClientById(id: string): Observable<RestaurantClient> {
    const client = this.clients.find(c => c.id === id);
    
    if (!client) {
      return throwError(() => new Error(`Cliente con ID ${id} no encontrado`));
    }
    
    return of(client).pipe(delay(200));
  }

  // UPDATE - Actualizar un cliente
  updateClient(id: string, clientData: Partial<RestaurantClient>): Observable<RestaurantClient> {
    const index = this.clients.findIndex(c => c.id === id);
    
    if (index === -1) {
      return throwError(() => new Error(`Cliente con ID ${id} no encontrado`));
    }

    const updatedClient: RestaurantClient = {
      ...this.clients[index],
      ...clientData,
      updatedAt: new Date()
    };

    this.clients[index] = updatedClient;
    sessionStorage.setItem('clients', JSON.stringify(this.clients))
    return of(updatedClient).pipe(delay(400));
  }

  // DELETE - Eliminar un cliente
  deleteClient(id: string): Observable<boolean> {
    const index = this.clients.findIndex(c => c.id === id);
    
    if (index === -1) {
      return throwError(() => new Error(`Cliente con ID ${id} no encontrado`));
    }

    this.clients.splice(index, 1);
    sessionStorage.setItem('clients', JSON.stringify(this.clients))
    return of(true).pipe(delay(300));
  }

  // Búsqueda de clientes por nombre
  searchClients(query: string): Observable<RestaurantClient[]> {
    const filteredClients = this.clients.filter(client => 
      client.name.toLowerCase().includes(query.toLowerCase()) ||
      client.contact.name.toLowerCase().includes(query.toLowerCase())
    );
    
    return of(filteredClients).pipe(delay(200));
  }

  // Obtener clientes por estado
  getClientsByStatus(status: 'active' | 'inactive' | 'prospect'): Observable<RestaurantClient[]> {
    const filteredClients = this.clients.filter(client => client.status === status);
    return of(filteredClients).pipe(delay(200));
  }

  // Generar ID único
  private generateId(): string {
    return Date.now().toString() + Math.random().toString(36).substr(2, 9);
  }
}