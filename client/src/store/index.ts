import { atom } from 'recoil';

export interface locationTypes {
    lat: number;
    lng: number;
}

export const locationState = atom<locationTypes>({
    key: 'locationState',
    default: { lat: 37.554722, lng: 126.970833 },
});

export const regionState = atom<string>({
    key: 'regionState',
    default: '',
});
