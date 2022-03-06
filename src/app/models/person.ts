import { Contacts } from './contacts';

export interface Person {
  id: number;
  typePerson: string;
  name: string;
  cpfCNPJ: string;
  contacts?: Contacts[];
  password?: string;
  typeEmployee?: string;
}
