import { IsNotEmpty } from 'class-validator';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';
import { BusStation } from '@interfaces/busStation.interface';

@Entity({ name: 'bus_stations' })
export class BusStationEntity extends BaseEntity implements BusStation {
    @PrimaryGeneratedColumn({ name: 'node_id', type: 'int' })
    NODE_ID: number;

    @Column({ name: 'ars_id', type: 'int', width: 5 })
    @IsNotEmpty()
    @Unique(['ARS_ID'])
    ARS_ID: number;

    @Column({ name: 'station_name', type: 'varchar', width: 50 })
    @IsNotEmpty()
    STATION_NAME: string;

    @Column({ name: 'longitude', type: 'float' })
    @IsNotEmpty()
    Lng: number;

    @Column({ name: 'latitude', type: 'float' })
    @IsNotEmpty()
    Lat: number;
}
