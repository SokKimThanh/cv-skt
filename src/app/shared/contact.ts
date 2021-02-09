import { Address } from './address';

export class Contact {
    id: number | undefined;
    firstname?: string | undefined;
    lastname?: string | undefined;
    phonenumber?: string | undefined;
    address?: Address | undefined;
    email?: string | undefined;
}
