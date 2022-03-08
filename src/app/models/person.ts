import { Employee } from './employee';
import { Contacts } from './contacts';

export interface Person {
  id?: number;
  typePerson: string;
  name: string;
  cpfCNPJ: string;
  contacts?: Contacts[];
  typeEmployee?: Employee;
}
