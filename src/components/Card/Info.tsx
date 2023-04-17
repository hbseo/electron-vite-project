import { Flex, FlexProps } from '@chakra-ui/react';
import { OverflownText } from '@/custom/OverflownText';

export interface InfoProps extends FlexProps {
    id: string;
    station: string;
    time: number;
}

export function Info({ id, station, time, ...rest }: React.PropsWithChildren<InfoProps>) {
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
                {id}번
            </OverflownText>
            <OverflownText noOfLines={1} fontSize={'xs'} display={'inline'} width={'65%'} textAlign={'center'}>
                {station}
            </OverflownText>
            <OverflownText noOfLines={1} fontSize={'xs'} display={'inline'} width={'14%'} textAlign={'right'} ml={'1%'}>
                {time}분
            </OverflownText>
        </Flex>
    );
}
