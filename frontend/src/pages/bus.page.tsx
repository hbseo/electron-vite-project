import React from 'react';
import { SimpleGrid, Box, useDisclosure, Flex } from '@chakra-ui/react';
import { BusCard, BusAdd } from '@/components/Bus';
import { ModalCustom, InputText } from '@/custom';

export interface BusStation {
    title: string;
    arsId: string;
}

export function BusPage() {
    const defaultBusStation = {
        title: '금천구청',
        arsId: '19004',
    };
    const [busStation, setBusStation] = React.useState<BusStation[]>([defaultBusStation]);
    const { isOpen, onOpen, onClose } = useDisclosure();

    React.useEffect(() => {}, []);

    return (
        <Box>
            <SimpleGrid minChildWidth={'350px'} spacing={2}>
                {busStation.map((station) => (
                    <BusCard key={station.arsId} title={station.title} arsId={station.arsId} />
                ))}
                <BusAdd onClick={onOpen} />
                <ModalCustom title={'Modal Title'} onClose={onClose} isOpen={isOpen} handleModalConfirm={onClose}>
                    <Flex>
                        <InputText size={'sm'} mr={2} />
                        <Box w={'500px'} h={'200px'} bg={'gray.600'} rounded={4} />
                    </Flex>
                </ModalCustom>
            </SimpleGrid>
        </Box>
    );
}
