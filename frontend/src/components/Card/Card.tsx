import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Flex, Box, MenuItem, IconButton, Menu, MenuButton, MenuList } from '@chakra-ui/react';
import { Info, BusRoute } from '@/components/Card';
import { OverflownText, InputText } from '@/custom';
import { GoKebabVertical } from 'react-icons/go';
import { getStationByUid } from '@/api';
import { BusArrival } from '@/interfaces/busArrival.interface';

const StyledInfo = styled(Info)`
    &:not(:last-child) {
        border-bottom: 1px solid black;
    }
`;

const contentStyles = css`
    margin: 4px 0;
`;

export interface CardProps {
    arsId: string;
    title: string;
}

export function Card({ arsId, title }: React.PropsWithChildren<CardProps>) {
    const [showBusRoute, setShowBusRoute] = React.useState(false);
    const [busList, setBusList] = React.useState<BusArrival[]>([]);

    React.useEffect(() => {
        if (arsId.length === 4) {
            arsId = '0' + arsId;
        }
        getStationByUid(arsId).then((response) => {
            setBusList(response.data.msgBody.itemList);
            console.log(busList);
        });
    }, []);

    const handleInfoClick = React.useCallback(() => {
        setShowBusRoute((prev) => !prev);
    }, [setShowBusRoute]);

    const handleSearchInputChange = React.useCallback((value: string | number) => {
        console.log(value);
    }, []);

    return (
        <Flex py={2} w={'full'} alignItems={'center'} justifyContent={'center'}>
            <Box w={'350px'} h={'250px'} mx={'auto'} shadow={'lg'} rounded={'lg'} overflow={'hidden'}>
                <Flex alignItems={'center'} px={6} py={3} bg={'gray.900'} justify={'space-between'}>
                    <OverflownText color={'white'} fontWeight={'bold'} fontSize={'lg'} noOfLines={1} textOverflow={'ellipsis'} display={'inline'}>
                        {title}
                    </OverflownText>
                    <Menu>
                        <MenuButton as={IconButton} aria-label={'Options'} icon={<GoKebabVertical />}></MenuButton>
                        <MenuList>
                            <MenuItem>수정</MenuItem>
                            <MenuItem>삭제</MenuItem>
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
                                <StyledInfo key={bus.rtNm} name={bus.rtNm} station={bus.stationNm1} time={bus.arrmsg1} onClick={handleInfoClick} />
                            ))}
                        </Box>
                    )}
                </Box>
            </Box>
        </Flex>
    );
}
