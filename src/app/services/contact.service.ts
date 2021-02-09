import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Contact } from '../shared/contact';
import { CONTACTS } from '../shared/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }
  getContacts(): Observable<Contact[]> {
    return of(CONTACTS);
  }
  getContact(id: number): Observable<Contact> {
    return of(CONTACTS.filter(contact => contact.id = contact.id)[0]);
  }
}
