import React from 'react';
import { Text, Flex } from '@chakra-ui/react';

export interface BusArrivalProps {
    name: string;
    arrmsg1: string;
    arrmsg2?: string;
}

export function BusArrival({ name, arrmsg1, arrmsg2 }: React.PropsWithChildren<BusArrivalProps>) {
    return (
        <Flex
            direction={'column'}
            borderTop={'1px solid black'}
            borderLeft={'1px solid black'}
            borderRadius={'md'}
            w={'80px'}
        >
            <Text fontSize={'lg'} as={'b'} borderRight={'1px solid black'} borderTopRadius={'md'}>
                5152
            </Text>
            <Flex>
                <Text
                    fontSize={'2xs'}
                    noOfLines={1}
                    borderBottom={'1px solid black'}
                    borderRight={'1px solid black'}
                    borderBottomRadius={'md'}
                    w={'40%'}
                >
                    곧도착
                </Text>
                <Text
                    fontSize={'2xs'}
                    noOfLines={1}
                    borderTop={'1px solid black'}
                    borderLeft={'1px solid transparent'}
                    borderRightRadius={0}
                    w={'60%'}
                >
                    다음 25분
                </Text>
            </Flex>
        </Flex>
    );
}
