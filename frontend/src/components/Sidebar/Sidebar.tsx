import { Box, Flex, Text, BoxProps } from '@chakra-ui/react';
import { NavItem } from '@/components/Sidebar';
import { BiBus } from 'react-icons/bi';

export interface SidebarProps extends BoxProps {
    sidebar?: React.ReactElement;
}

export function Sidebar({ sidebar, ...rest }: React.PropsWithChildren<SidebarProps>) {
    return (
        <Box {...rest} as={'nav'} pos={'fixed'} top={0} left={0} h={'full'} pb={10}>
            <Flex px={4} py={5} align={'center'}>
                <Text fontSize={'2xl'} ml={2} fontWeight={'semibold'}>
                    제목
                </Text>
            </Flex>
            <Flex direction={'column'} as={'nav'} fontSize={'sm'} aria-label={'Main Navigation'}>
                <NavItem icon={BiBus}>버스</NavItem>
            </Flex>
        </Box>
    );
}
