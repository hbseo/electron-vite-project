import { atom, selector } from 'recoil';
import { BusStation } from '@/interfaces/busStation.interface';

export const stationState = atom<BusStation[]>({
    key: 'stationState',
    default: [],
});

export const stationSelector = selector({
    key: 'stationSelector',
    get: ({ get }) => {
        const stations = get(stationState);
        return stations;
    },
    set: ({ set }, newValue) => {
        set(stationState, newValue);
    },
});
