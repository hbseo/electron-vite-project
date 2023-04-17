import React from 'react';
import { SimpleGrid, Box } from '@chakra-ui/react';
import { Card } from '@/components/Card';

export function BusPage() {
    React.useEffect(() => {
        console.log('BusPage mounted');
    }, []);

    return (
        <Box>
            <SimpleGrid minChildWidth={'350px'} spacing={2}>
                <Card title={'영등포역'} />
                <Card title={'영등포역'} />
                <Card title={'영등포역'} />
                <Card title={'영등포역'} />
            </SimpleGrid>
        </Box>
    );
}
