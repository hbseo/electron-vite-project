import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Flex, Box, MenuItem, IconButton, Menu, MenuButton, MenuList } from '@chakra-ui/react';
import { Info, BusRoute } from '@/components/Card';
import { OverflownText, InputText } from '@/custom';
import { GoKebabVertical } from 'react-icons/go';

const StyledInfo = styled(Info)`
    &:not(:last-child) {
        border-bottom: 1px solid black;
    }
`;

const contentStyles = css`
    margin: 4px 0;
`;

export interface CardProps {
    title: string;
}

export function Card({ title }: React.PropsWithChildren<CardProps>) {
    const [showBusRoute, setShowBusRoute] = React.useState(false);

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
                            <MenuItem>삭제</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>

                <Box py={2} px={4} maxH={'200px'} overflowY={'auto'}>
                    <InputText placeholder="Search for station" action={handleSearchInputChange} />
                    {showBusRoute ? (
                        <Box css={contentStyles}>
                            <BusRoute />
                        </Box>
                    ) : (
                        <Box css={contentStyles}>
                            <StyledInfo
                                id="5714"
                                station="금천구청독산가산디지털단지구로신도림영등포"
                                time={15}
                                onClick={handleInfoClick}
                            />
                            <StyledInfo id="10-1" station="금천구청독산가산디지털단지구로신도림영등포" time={15} />
                            <StyledInfo id="5714" station="금천구청독산가산디지털단지구로신도림영등포" time={15} />
                            <StyledInfo id="5714" station="금천구청독산가산디지털단지구로신도림영등포" time={15} />
                        </Box>
                    )}
                </Box>
            </Box>
        </Flex>
    );
}
