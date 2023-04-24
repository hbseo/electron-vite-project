import { API_ENDPOINT } from '@/config';
import axios from 'axios';

export async function getStationByUid(arsId: string) {
    const url = `${API_ENDPOINT}/bus/getStationByUid?arsId=${arsId}`;
    const response = await axios(url);
    const data = response.data;
    return data;
}

export async function getStationByNameList(stSrch: string) {
    const url = `${API_ENDPOINT}/bus/getStationByNameList?stSrch=${stSrch}`;
    const response = await axios(url);
    const data = response.data;
    return data;
}
