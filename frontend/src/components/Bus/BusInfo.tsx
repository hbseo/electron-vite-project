import React from 'react';
import { Text, Flex, Center, FlexProps } from '@chakra-ui/react';

export interface BusInfoProps extends FlexProps {
    name: string;
    arrmsg1: string;
    arrmsg2?: string;
    show?: boolean;
}

export function BusInfo({ name, arrmsg1, arrmsg2, show = false, ...rest }: React.PropsWithChildren<BusInfoProps>) {
    return (
        <Flex direction={'column'} w={'80px'} {...rest}>
            <Center>
                <Text fontSize={'md'} as={'b'}>
                    {name}
                </Text>
            </Center>
            <Center>
                <Text fontSize={'2xs'} noOfLines={1}>
                    {arrmsg1?.replace(/(?<=분).+/g, '')?.trim()}
                </Text>
                {show && arrmsg2 ? (
                    <Text fontSize={'2xs'} noOfLines={1} align={'right'}>
                        / {arrmsg2?.replace(/(?<=분).+/g, '')?.trim()}
                    </Text>
                ) : null}
            </Center>
        </Flex>
    );
}
