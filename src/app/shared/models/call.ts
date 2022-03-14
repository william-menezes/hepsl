import { Person } from 'src/app/shared/models/person';
import { Historic } from 'src/app/shared/models/historic';

type department = 'suporte' | 'dev' | 'implantacao' | 'financeiro';

export interface Call {
  id?: number;
  dateInclusion: number;
  dateScheduling: number;
  department: department;
  client: Person;
  employee: Person;
  status: string;
  description: string;
  historic: Historic;
}
