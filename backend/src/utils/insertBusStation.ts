import { DataSource } from 'typeorm';
import { BusStation } from '@/interfaces/busStation.interface';
import path from 'path';
import fs from 'fs';
import { appRootPath } from '@/config';

const getBusStation = async () => {
    const filePath = path.join(appRootPath, '/resources/busData.json');
    const file = fs.readFileSync(filePath, 'utf8');
    const busStationData: BusStation[] = JSON.parse(file);

    return busStationData;
};

export const insertBusStation = async (dataSource: DataSource) => {
    const busStationData = await getBusStation();
    await dataSource.createQueryBuilder().insert().into('bus_stations').values(busStationData).execute();
};
