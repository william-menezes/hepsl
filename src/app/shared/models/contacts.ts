type typeContact = 'whatsapp' | 'telefone' | 'email';

export interface Contacts {
  _id?: number;
  typeContact: typeContact;
  contact: string;
  nameContact: string;
}
