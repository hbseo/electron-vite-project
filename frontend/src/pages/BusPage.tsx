import React from 'react';
import { SimpleGrid, Box, Button } from '@chakra-ui/react';
import { Card } from '@/components/Card';
import { getBusArrivalList } from '@/api';

export function BusPage() {
    React.useEffect(() => {}, []);

    const handleButtonClick = React.useCallback(() => {
        getBusArrivalList('19004').then((res) => {
            console.log(res);
        });
    }, []);

    return (
        <Box>
            <Button onClick={handleButtonClick} />
            <SimpleGrid minChildWidth={'350px'} spacing={2}>
                <Card title={'영등포역'} />
                <Card title={'영등포역'} />
                <Card title={'영등포역'} />
                <Card title={'영등포역'} />
            </SimpleGrid>
        </Box>
    );
}
