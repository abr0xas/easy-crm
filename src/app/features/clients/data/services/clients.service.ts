import { Injectable, signal, computed } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { RestaurantClient } from '../models/client.modal';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  
  // Signal para state management
  private clientsSignal = signal<RestaurantClient[]>(this.loadFromSessionStorage());

  // Computed signal para exponer clientes
  readonly clients = this.clientsSignal.asReadonly();

  // CREATE - Crear un nuevo cliente
  createClient(clientData: Omit<RestaurantClient, 'id' | 'createdAt' | 'updatedAt'>): Observable<RestaurantClient> {
    const newClient: RestaurantClient = {
      ...clientData,
      id: this.generateId(),
      createdAt: new Date() as any,
      updatedAt: new Date()
    };

    // Actualizar signal
    this.clientsSignal.update(clients => [...clients, newClient]);
    
    // Guardar en sessionStorage
    this.saveToSessionStorage();
    
    return of(newClient).pipe(delay(300));
  }

  // READ - Obtener todos los clientes
  getAllClients(): Observable<RestaurantClient[]> {
    return of(this.clientsSignal()).pipe(delay(200));
  }

  // Cargar desde sessionStorage
  private loadFromSessionStorage(): RestaurantClient[] {
    try {
      const stored = sessionStorage.getItem('clients');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  }

  // Guardar en sessionStorage
  private saveToSessionStorage(): void {
    sessionStorage.setItem('clients', JSON.stringify(this.clientsSignal()));
  }

  // Generar ID único
  private generateId(): string {
    return Date.now().toString() + Math.random().toString(36).substr(2, 9);
  }
}