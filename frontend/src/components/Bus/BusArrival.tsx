import React from 'react';
import { Text, Flex, Center, FlexProps } from '@chakra-ui/react';

export interface BusArrivalProps extends FlexProps {
    name: string;
    arrmsg1: string;
    arrmsg2?: string;
    show?: boolean;
}

export function BusArrival({
    name,
    arrmsg1,
    arrmsg2,
    show = false,
    ...rest
}: React.PropsWithChildren<BusArrivalProps>) {
    return (
        <Flex direction={'column'} w={'80px'} {...rest}>
            <Center>
                <Text fontSize={'md'} as={'b'}>
                    {name}
                </Text>
            </Center>
            <Center>
                <Text fontSize={'2xs'} noOfLines={1}>
                    {arrmsg1}
                </Text>
                {show && arrmsg2 ? (
                    <Text fontSize={'2xs'} noOfLines={1} align={'right'}>
                        / {arrmsg2}
                    </Text>
                ) : null}
            </Center>
        </Flex>
    );
}
