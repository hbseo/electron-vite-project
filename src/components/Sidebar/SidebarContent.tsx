import { Box, Flex, Text } from '@chakra-ui/react';
import { NavItem } from '@/components/Sidebar';
import { BiBus } from 'react-icons/bi';

export function SidebarContent({ ...props }) {
    return (
        <Box {...props}>
            <Flex px={4} py={5} align={'center'}>
                <Text fontSize={'2xl'} ml={2} fontWeight={'semibold'}>
                    제목
                </Text>
            </Flex>
            <Flex direction={'column'} as={'nav'} fontSize={'sm'} aria-label={'Main Navigation'}>
                <NavItem>버스</NavItem>
            </Flex>
        </Box>
    );
}
