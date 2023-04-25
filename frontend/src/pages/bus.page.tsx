import React from 'react';
import { SimpleGrid, Box } from '@chakra-ui/react';
import { Card, PlusCard } from '@/components/Card';

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

    React.useEffect(() => {}, []);

    const handlePlusClick = React.useCallback(() => {}, []);

    return (
        <Box>
            <SimpleGrid minChildWidth={'350px'} spacing={2}>
                {busStation.map((station) => (
                    <Card key={station.arsId} title={station.title} arsId={station.arsId} />
                ))}
                <PlusCard onClick={handlePlusClick} />
            </SimpleGrid>
        </Box>
    );
}
