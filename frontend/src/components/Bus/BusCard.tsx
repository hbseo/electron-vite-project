import React from 'react';
import {
    Flex,
    Box,
    MenuItem,
    IconButton,
    Menu,
    MenuButton,
    MenuList,
    Grid,
    GridItem,
    useInterval,
} from '@chakra-ui/react';
import { BusInfo } from '@/components/Bus';
import { OverflownText } from '@/custom';
import { GoKebabVertical } from 'react-icons/go';
import { getStationByUid } from '@/api';
import { BusArrival } from '@/interfaces/busArrival.interface';
import { stationSelector } from '@/store';
import { BusStation } from '@/interfaces/busStation.interface';
import { useSetRecoilState } from 'recoil';

export interface BusCardProps {
    arsId: string;
    title: string;
}

export function BusCard({ arsId, title }: React.PropsWithChildren<BusCardProps>) {
    const [arriveSoon, setArriveSoon] = React.useState<BusArrival[]>([]);
    const [arriveNext, setArriveNext] = React.useState<BusArrival[]>([]);
    const [arriveSoonContainer, setArriveSoonContainer] = React.useState<BusArrival[]>([]);
    const [arriveNextContainer, setArriveNextContainer] = React.useState<BusArrival[]>([]);
    const [arriveSoonIndex, setArriveSoonIndex] = React.useState(0);
    const [arriveNextIndex, setArriveNextIndex] = React.useState(0);
    const setBusStation = useSetRecoilState<BusStation[]>(stationSelector);

    let soon: BusArrival[] = [];
    let next: BusArrival[] = [];

    React.useEffect(() => {
        if (arsId.length === 4) {
            arsId = '0' + arsId;
        }
        getStationByUid(arsId).then((response) => {
            // Todo itemList empty 예외처리
            if (response.data.msgBody.itemList) {
                response.data.msgBody.itemList.forEach((bus: BusArrival) => {
                    if (bus.arrmsg1.includes('곧')) {
                        soon.push(bus);
                    } else {
                        next.push(bus);
                    }
                });
                setArriveSoonContainer(soon);
                setArriveNextContainer(next);

                setArriveSoon(arriveSoonContainer.slice(arriveSoonIndex, 3));
                setArriveNext(arriveNextContainer.slice(arriveNextIndex, 8));
            }
        });
    }, []);

    useInterval(() => {
        if (arriveSoonContainer.length > 0) {
            if (arriveSoonIndex + 3 >= arriveSoonContainer.length) {
                setArriveSoonIndex(0);
            } else {
                setArriveSoonIndex((prev) => prev + 3);
            }
            setArriveSoon(arriveSoonContainer.slice(arriveSoonIndex, arriveSoonIndex + 3));
        }
        if (arriveNextContainer.length > 0) {
            if (arriveNextIndex + 8 >= arriveNextContainer.length) {
                setArriveNextIndex(0);
            } else {
                setArriveNextIndex((prev) => prev + 8);
            }
            setArriveNext(arriveNextContainer.slice(arriveNextIndex, arriveNextIndex + 8));
        }
    }, 5000);

    const handleRefreshClick = React.useCallback(() => {
        getStationByUid(arsId).then((response) => {
            // Todo itemList empty 예외처리

            soon = [];
            next = [];
            if (response.data.msgBody.itemList) {
                response.data.msgBody.itemList.forEach((bus: BusArrival) => {
                    if (bus.arrmsg1.includes('곧')) {
                        soon.push(bus);
                    } else {
                        next.push(bus);
                    }
                });
            }

            setArriveSoonContainer(soon);
            setArriveNextContainer(next);

            setArriveSoon(arriveSoonContainer.slice(arriveSoonIndex, 3));
            setArriveNext(arriveNextContainer.slice(arriveNextIndex, 4));
        });
    }, []);

    const handleRemoveClick = React.useCallback(() => {
        setBusStation((prev) => prev.filter((station) => station.arsId !== arsId));
    }, [setBusStation, arsId]);

    return (
        <Flex py={2} w={'full'} alignItems={'center'} justifyContent={'center'}>
            <Box w={'350px'} h={'230px'} mx={'auto'} shadow={'lg'} rounded={'lg'} overflow={'hidden'}>
                <Flex alignItems={'center'} px={6} py={3} bg={'gray.900'} justify={'space-between'}>
                    <OverflownText
                        color={'white'}
                        fontWeight={'bold'}
                        fontSize={'lg'}
                        noOfLines={1}
                        textOverflow={'ellipsis'}
                        display={'inline'}
                    >
                        {title}
                    </OverflownText>
                    <Menu>
                        <MenuButton as={IconButton} aria-label={'Options'} icon={<GoKebabVertical />}></MenuButton>
                        <MenuList>
                            <MenuItem>수정</MenuItem>
                            <MenuItem onClick={handleRemoveClick}>삭제</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>

                <Box py={2} px={4} maxH={'200px'} overflowY={'auto'}>
                    <Grid templateColumns={'repeat(3, 1fr)'}>
                        {arriveSoon.map((bus) => (
                            <GridItem key={bus.vehId1}>
                                <BusInfo name={bus.rtNm} arrmsg1={'곧도착'} arrmsg2={bus.arrmsg2} show />
                            </GridItem>
                        ))}
                    </Grid>
                    <Grid templateColumns={'repeat(4, 1fr)'} mt={2}>
                        {arriveNext.map((bus) => (
                            <GridItem key={bus.vehId1}>
                                <BusInfo name={bus.rtNm} arrmsg1={bus.arrmsg1} />
                            </GridItem>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </Flex>
    );
}
