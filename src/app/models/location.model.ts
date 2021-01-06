export interface Location {
  street: string;
  city: string;
  state: string;
  postcode: number;
  coordinates: { latitude: number; longitude: number };
  timezone: { offset: number; description: string };
}
