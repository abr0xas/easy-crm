import { Injectable, signal } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { RestaurantClient } from '../models/client.modal';

// In Angular 19, @Injectable is a decorator that marks a class as available for dependency injection
// 'providedIn: "root"' makes the service a singleton, available app-wide without needing to add it to a module's providers
@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  // In Angular 19, signals are a new reactive state management feature
  // Signals are like variables that notify components when their value changes
  // Here, we initialize with data from sessionStorage
  private clientsSignal = signal<RestaurantClient[]>(this.loadClientsFromStorage());

  // A computed signal is a read-only signal that derives its value from other signals
  // clientsSignal.asReadonly() ensures components can only read, not modify, the clients list
  public readonly clients = this.clientsSignal.asReadonly();

  // Method to create a new client
  // Takes client data without id, createdAt, or updatedAt, and returns an Observable
  createClient(
    clientData: Omit<RestaurantClient, 'id' | 'createdAt' | 'updatedAt'>,
  ): Observable<RestaurantClient> {
    // Create a new client object with generated ID and timestamps
    const newClient: RestaurantClient = {
      ...clientData,
      id: this.generateUniqueId(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // Update the signal with the new client
    // clientsSignal.update() takes a function that returns the new state
    this.clientsSignal.update((currentClients) => [...currentClients, newClient]);

    // Save the updated client list to sessionStorage
    this.saveClientsToStorage();

    // Return an Observable with the new client, delayed to simulate an API call
    return of(newClient).pipe(delay(300));
  }

  // Method to get all clients
  // Returns an Observable of the current clients array
  getAllClients(): Observable<RestaurantClient[]> {
    // Access the current value of the signal with clientsSignal()
    return of(this.clientsSignal()).pipe(delay(200));
  }

  // Load clients from sessionStorage
  private loadClientsFromStorage(): RestaurantClient[] {
    try {
      const storedData = sessionStorage.getItem('clients');
      // Parse stored JSON data or return an empty array if none exists
      return storedData ? JSON.parse(storedData) : [];
    } catch (error) {
      console.error('Error loading clients from sessionStorage:', error);
      return [];
    }
  }

  // Save clients to sessionStorage
  private saveClientsToStorage(): void {
    // Convert the current signal value to JSON and store it
    sessionStorage.setItem('clients', JSON.stringify(this.clientsSignal()));
  }

  // Generate a unique ID for a new client
  private generateUniqueId(): string {
    // Combines timestamp and random string for uniqueness
    return Date.now().toString() + Math.random().toString(36).substring(2, 9);
  }
}
