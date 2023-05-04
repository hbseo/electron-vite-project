import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Flex, Box, MenuItem, IconButton, Menu, MenuButton, MenuList } from '@chakra-ui/react';
import { BusInfo, BusRoute } from '@/components/Bus';
import { OverflownText } from '@/custom';
import { GoKebabVertical } from 'react-icons/go';
import { getStationByUid } from '@/api';
import { BusArrival } from '@/interfaces/busArrival.interface';
import { stationSelector } from '@/store';
import { BusStation } from '@/interfaces/busStation.interface';
import { useSetRecoilState } from 'recoil';

const StyledInfo = styled(BusInfo)`
    &:not(:last-child) {
        border-bottom: 1px solid black;
    }
`;

const contentStyles = css`
    margin: 4px 0;
`;

export interface BusCardProps {
    arsId: string;
    title: string;
}

export function BusCard({ arsId, title }: React.PropsWithChildren<BusCardProps>) {
    const [showBusRoute, setShowBusRoute] = React.useState(false);
    const [busList, setBusList] = React.useState<BusArrival[]>([]);
    const setBusStation = useSetRecoilState<BusStation[]>(stationSelector);

    React.useEffect(() => {
        if (arsId.length === 4) {
            arsId = '0' + arsId;
        }
        getStationByUid(arsId).then((response) => {
            setBusList(response.data.msgBody.itemList);
        });
    }, []);

    const handleInfoClick = React.useCallback(() => {
        setShowBusRoute((prev) => !prev);
    }, [setShowBusRoute]);

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
                    {showBusRoute ? (
                        <Box css={contentStyles}>
                            <BusRoute />
                        </Box>
                    ) : (
                        <Box css={contentStyles}>
                            {busList.map((bus) => (
                                <StyledInfo
                                    key={bus.vehId1}
                                    name={bus.rtNm}
                                    station={bus.stationNm1}
                                    time={bus.arrmsg1}
                                    onClick={handleInfoClick}
                                />
                            ))}
                        </Box>
                    )}
                </Box>
            </Box>
        </Flex>
    );
}
