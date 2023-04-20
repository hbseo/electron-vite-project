import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Flex, Box } from '@chakra-ui/react';
import { Info, BusRoute } from '@/components/Card';
import { OverflownText, InputText } from '@/custom';

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
            <Box w={'350px'} mx={'auto'} shadow={'lg'} rounded={'lg'} overflow={'hidden'}>
                <Flex alignItems={'center'} px={6} py={3} bg={'gray.900'}>
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
