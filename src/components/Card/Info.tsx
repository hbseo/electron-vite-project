import { Flex, Text } from '@chakra-ui/react';
import { OverflownText } from '@/custom/OverflownText';

export interface InfoProps {
    id: string;
    station: string;
    time: number;
    onClick?: () => void;
}

export function Info({ ...props }: React.PropsWithChildren<InfoProps>) {
    return (
        <Flex
            alignItems={'center'}
            justifyContent={'center'}
            p={1}
            minW={'300px'}
            _hover={{ cursor: 'pointer' }}
            {...props}
        >
            <OverflownText noOfLines={1} fontSize={'xs'} display={'inline'} width={'19%'} textAlign={'left'} mr={'1%'}>
                {props.id}번
            </OverflownText>
            <OverflownText noOfLines={1} fontSize={'xs'} display={'inline'} width={'65%'} textAlign={'center'}>
                {props.station}
            </OverflownText>
            <OverflownText noOfLines={1} fontSize={'xs'} display={'inline'} width={'14%'} textAlign={'right'} ml={'1%'}>
                {props.time}분
            </OverflownText>
        </Flex>
    );
}
