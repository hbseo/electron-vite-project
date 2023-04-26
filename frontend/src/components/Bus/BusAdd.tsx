import { HiPlus } from 'react-icons/hi';
import { Flex, Center, CenterProps } from '@chakra-ui/react';
import styled from '@emotion/styled';

const StyledPlus = styled(HiPlus)`
    font-size: 100px;
    color: #d6d4d4;
`;

export function BusAdd({ ...props }: React.PropsWithChildren<CenterProps>) {
    return (
        <Flex py={2} w={'full'} alignItems={'center'} justifyContent={'center'}>
            <Center
                w={'350px'}
                h={'230px'}
                mx={'auto'}
                shadow={'lg'}
                rounded={'lg'}
                overflow={'hidden'}
                _hover={{ bg: 'gray.100' }}
                {...props}
            >
                <StyledPlus />
            </Center>
        </Flex>
    );
}
