import { API_KEY, END_POINT } from '@/config';
import axios from 'axios';

export class BusService {
    private key: string;
    private endpoint: string;

    constructor() {
        this.key = API_KEY;
        this.endpoint = END_POINT;
    }

    public async getStationByUid(arsId: string): Promise<void> {
        const url = `${this.endpoint}/stationinfo/getStationByUid?serviceKey=${this.key}&arsId=${arsId}&resultType=json`;
        const response = await axios(url);
        const data = response.data;
        return data;
    }
}
