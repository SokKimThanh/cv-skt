import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Contact } from '../shared/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: [
    './contact.component.scss',
    // './contact.component.mobile.scss'
  ]
})
export class ContactComponent implements OnInit {
  contact: Contact;
  constructor(private contactService: ContactService) { this.contact = new Contact(); }

  ngOnInit(): void {
    this.contactService.getContact(1).subscribe((contact: Contact) => this.contact = contact);
  }
}
