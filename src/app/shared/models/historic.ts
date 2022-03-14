import { Person } from 'src/app/shared/models/person';
export interface Historic {
  id?: number;
  dateTime: number;
  note: string;
  status: string;
  employee: Person;
}
