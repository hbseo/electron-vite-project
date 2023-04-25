import { Box, Flex, Drawer, DrawerOverlay, DrawerContent, useDisclosure, IconButton } from '@chakra-ui/react';
import { Sidebar } from '@/components/Sidebar';
import { FiMenu } from 'react-icons/fi';
import { Router } from '@/Router';

export function App() {
    const sidebar = useDisclosure();
    return (
        <Box as={'section'} minH={'100vh'}>
            <Sidebar display={{ base: 'none', md: 'unset' }} />
            <Drawer isOpen={sidebar.isOpen} onClose={sidebar.onClose} placement={'left'}>
                <DrawerOverlay />
                <DrawerContent>
                    <Sidebar w={'full'} borderRight={'none'} />
                </DrawerContent>
            </Drawer>
            <Box ml={{ base: 0, md: 40 }} transition={'.3s ease'}>
                <Flex
                    as={'header'}
                    align={'center'}
                    justify={'space-between'}
                    w={'full'}
                    px={4}
                    borderBottomWidth={1}
                    h={14}
                >
                    <IconButton
                        aria-label={'Menu'}
                        display={{ base: 'inline-flex', md: 'none' }}
                        onClick={sidebar.onOpen}
                        icon={<FiMenu />}
                        size={'sm'}
                    />
                </Flex>
                <Box as={'main'} p={4}>
                    <Router />
                </Box>
            </Box>
        </Box>
    );
}

export default App;
