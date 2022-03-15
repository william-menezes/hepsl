import { Person } from 'src/app/shared/models/person';
export interface Historic {
  id?: number;
  dateTime: Date;
  note: string;
  status: string;
  employee: Person;
}
