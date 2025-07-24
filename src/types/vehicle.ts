export interface Vehicle {
  id: string;
  name: string;
  status: 'ACTIVE' | 'INACTIVE' | 'MAINTENANCE';
  speed: number;
  updated_at: string;
}

export interface VehicleDetail {
  id: string;
  name: string;
  status: 'ACTIVE' | 'INACTIVE' | 'MAINTENANCE';
  speed: number;
  updated_at: string;
  odometer?: number;
  fuel_level?: number;
  timestamp?: string;
  latitude?: number;
  longitude?: number;
}