import { Flex, FlexProps } from '@chakra-ui/react';
import { OverflownText } from '@/custom/OverflownText';

export interface BusInfoProps extends FlexProps {
    name: string;
    station: string;
    time: string;
}

export function BusInfo({ name, station, time, ...rest }: React.PropsWithChildren<BusInfoProps>) {
    return (
        <Flex
            alignItems={'center'}
            justifyContent={'center'}
            p={1}
            minW={'300px'}
            _hover={{ cursor: 'pointer' }}
            {...rest}
        >
            <OverflownText noOfLines={1} fontSize={'xs'} display={'inline'} width={'19%'} textAlign={'left'} mr={'1%'}>
                {name}
            </OverflownText>
            <OverflownText noOfLines={1} fontSize={'xs'} display={'inline'} width={'65%'} textAlign={'center'}>
                {station}
            </OverflownText>
            <OverflownText noOfLines={1} fontSize={'xs'} display={'inline'} width={'14%'} textAlign={'right'} ml={'1%'}>
                {time}
            </OverflownText>
        </Flex>
    );
}
