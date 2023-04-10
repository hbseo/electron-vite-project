import React from 'react';
import styled from '@emotion/styled';
import { Flex, Box } from '@chakra-ui/react';
import { Info } from './Info';
import { OverflownText } from '@/custom/OverflownText';

const StyledInfo = styled(Info)`
    &:not(:last-child) {
        border-bottom: 1px solid black;
    }
`;

export interface CardProps {
    title: string;
}

export function Card({ ...props }: React.PropsWithChildren<CardProps>) {
    return (
        <Flex p={10} w={'full'} alignItems={'center'} justifyContent={'center'}>
            <Box minW={'350px'} mx={'auto'} shadow={'lg'} rounded={'lg'} overflow={'hidden'}>
                <Flex alignItems={'center'} px={6} py={3} bg={'gray.900'}>
                    <OverflownText
                        color={'white'}
                        fontWeight={'bold'}
                        fontSize={'lg'}
                        noOfLines={1}
                        textOverflow={'ellipsis'}
                        display={'inline'}
                    >
                        {props.title}
                    </OverflownText>
                </Flex>

                <Box py={2} px={4} maxH={'200px'} overflowY={'auto'}>
                    <StyledInfo
                        id="5714"
                        station="금천구청독산가산디지털단지구로신도림영등포"
                        time={15}
                        onClick={() => {
                            console.log('clicked');
                        }}
                    />
                    <StyledInfo id="10-1" station="금천구청독산가산디지털단지구로신도림영등포" time={15} />
                    <StyledInfo id="5714" station="금천구청독산가산디지털단지구로신도림영등포" time={15} />
                    <StyledInfo id="5714" station="금천구청독산가산디지털단지구로신도림영등포" time={15} />
                </Box>
            </Box>
        </Flex>
    );
}
