import { Timestamp } from 'rxjs';

// Tipos auxiliares para mejorar la legibilidad y reutilización
type ContactStatus = 'active' | 'inactive' | 'prospect';
type SocialMediaPlatforms = 'facebook' | 'instagram' | 'twitter' | string;

interface ContactInfo {
  name: string;
  email: string;
  phone: string;
}

interface Address {
  street: string;
  city: string;
  country: string;
  postalCode?: string;
}

interface SocialMedia {
  [platform: string]: string | undefined;
  facebook?: string;
  instagram?: string;
  twitter?: string;
}

interface RestaurantUser {
  id: string;
  name: string;
  email?: string;
  role: string;
}

export interface RestaurantClient {
  // Identificación básica
  id: string;
  name: string;

  // Información de contacto
  contact: ContactInfo;

  // Ubicación
  address: Address;

  // Redes sociales (estructura más definida)
  //socialMedia?: SocialMedia;

  // Estado y metadatos
  status: ContactStatus;
  createdAt: Date;
  updatedAt: Date;

  // Usuarios asociados
  users?: RestaurantUser[];
}
