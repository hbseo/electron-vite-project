const { VITE_DATA_API_KEY } = import.meta.env;

export async function getBusData() {
    return fetch('./data/busData.json').then((response) => response.json());
}

export async function getBusArrivalList(arsId: string | number) {
    console.log(VITE_DATA_API_KEY);
    return fetch(`/api/stationinfo/getStationByUid?serviceKey=${VITE_DATA_API_KEY}&arsId=${arsId}&resultType=json`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
    }).then((response) => response.json());
}
