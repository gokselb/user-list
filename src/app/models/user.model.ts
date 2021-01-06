import { LoginInfo } from './login-info.model';

interface Name {
  title: string;
  first: string;
  last: string;
}

interface DateWithAge {
  date: Date;
  age: number;
}

interface NameValue {
  name: string;
  value: any;
}

interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface User {
  id: NameValue;
  name: Name;
  gender: 'female' | 'male' | 'other';
  email: string;
  location: Location;
  login: LoginInfo;
  dob: DateWithAge;
  registered: DateWithAge;
  phone: string;
  cell: string;
  picture: Picture;
  nat: string;
}
