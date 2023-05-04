import { atom } from 'recoil';
import { BusStation } from '@/interfaces/busStation.interface';

export const stationState = atom<BusStation[]>({
    key: 'stationState',
    default: [],
});
