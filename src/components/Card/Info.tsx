import React from 'react';
import styled from '@emotion/styled';
import { Card, CardBody, Stack } from '@chakra-ui/react';

const StyledInfoWrapper = styled(Card)`
    padding: 10px;
`;
const StyledInfoStack = styled(Stack)``;

export function Info() {
    return (
        <StyledInfoWrapper>
            <CardBody>
                <StyledInfoStack></StyledInfoStack>
            </CardBody>
        </StyledInfoWrapper>
    );
}
