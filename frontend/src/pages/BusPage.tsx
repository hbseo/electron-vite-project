import React from 'react';
import { SimpleGrid, Box } from '@chakra-ui/react';
import { Card, PlusCard } from '@/components/Card';

export function BusPage() {
    React.useEffect(() => {}, []);

    const handlePlusClick = React.useCallback(() => {}, []);

    return (
        <Box>
            <SimpleGrid minChildWidth={'350px'} spacing={2}>
                <Card title={'영등포역'} />
                <PlusCard onClick={handlePlusClick} />
            </SimpleGrid>
        </Box>
    );
}
