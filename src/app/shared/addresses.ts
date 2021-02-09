import { Address } from './address';

const MANULIFE = 'Manulife Plaza Building, 75 Hoang Van Thai, Tan Phu Ward, Dist. HCM City (on-site)';
export const ADDRESSES: Address[] = [
    {
        name: 'Nhà Riêng Sok Kim Thanh', address: [
            { name: 'Áo cưới Hồng Đức', street: '21 Street 5', ward: 'Phuoc Binh', district: '9', city: 'Ho Chi Minh City' },
            // tslint:disable-next-line:max-line-length
            { name: 'Áo dài may sẵn BIG SIZE Hồng Đức', street: '21 Street 5', ward: 'Phuoc Binh', district: '9', city: 'Ho Chi Minh City' },
            // tslint:disable-next-line:max-line-length
            { name: 'Lập trình web Sok Kim Thanh', street: '21 Street 5', ward: 'Phuoc Binh', district: '9', city: 'Ho Chi Minh City' },
        ]
    },
    {
        name: 'INNOTECH', address: [
            // tslint:disable-next-line:max-line-length
            { name: 'INNOTECH', street: '33 Ba Vi', ward: 'Ward 4', district: 'Tan Binh', city: 'Ho Chi Minh City' },
            { name: MANULIFE },
        ]
    },
    { name: 'INNOTECH', address: [{ street: '33 Ba Vi', ward: 'Ward 4', district: 'Tan Binh', city: 'Ho Chi Minh City' }] },
];
