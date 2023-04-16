import React from 'react';
import { Card } from '@/components/Card';

export function BusPage() {
    React.useEffect(() => {
        console.log('BusPage mounted');
    }, []);

    return (
        <>
            <Card title={'영등포역'} />
        </>
    );
}
