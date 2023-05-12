import React from 'react';
import { MdRefresh } from 'react-icons/md';
import styled from '@emotion/styled';
import { keyframes, css } from '@emotion/react';

export interface RefreshIconProps {
    value: boolean;
    activeColor?: string;
    size?: number;
}

const rotate = keyframes`
    0% {
        rotate: 0deg;
    }
    100% {
        rotate: 359deg;
    }
`;

const StyledRefreshIcon = styled(MdRefresh)<RefreshIconProps>`
    animation: ${({ value }) =>
        value
            ? css`
                  ${rotate} 1s linear infinite
              `
            : 'none'};
    color: ${({ value, activeColor }) => (value ? activeColor || 'black' : 'black')};
`;

export function RefreshIcon({ value, activeColor, size }: RefreshIconProps) {
    return <StyledRefreshIcon value={value} activeColor={activeColor} size={size} />;
}
