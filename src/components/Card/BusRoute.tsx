import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { chakra } from '@chakra-ui/react';

const StyledTooltip = styled(chakra.div)`
    position: absolute;
    top: 2px;
    left: 5px;
    z-index: 1;
    visibility: hidden;
    width: 30px;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    font-size: 12px;
`;

const pathStyles = () => {
    return css`
        &:hover > * {
            display: visible;
        }
    `;
};

// ─ │ ┌ ┐ ┘ └ .
const StyledPath = styled(chakra.div)<{ direction?: number; color?: string }>`
    position: relative;
    width: 6px;
    height: 6px;
    display: inline-block;
    border-style: solid;
    border-radius: 50%;
    border-width: 2px;
    ${({ color }) => `border-color: ${color || 'rgb(135, 199, 0)'};`}
    margin: 22px;

    &:before,
    &:after {
        content: '';
        position: absolute;
        height: 2px;
        width: 24px;
        background: rgb(135, 199, 0);
        pointer-events: none;
    }

    ${({ direction }) => {
        if (direction === 1) {
            return ` 
                &:before { 
                    right: 4px; 
                } 
                &:after { 
                    left: 4px; 
                } 
            `;
        } else if (direction === 2) {
            return ` 
                &:before { 
                    top: 4px; 
                    height: 24px; 
                    width: 2px; 
                } 
                &:after { 
                    bottom: 4px; 
                    height: 24px; 
                    width: 2px; 
                } 
            `;
        } else if (direction === 3) {
            return ` 
                &:before { 
                    top: 4px; 
                    height: 24px; 
                    width: 2px; 
                } 
                &:after { 
                    left: 4px; 
                } 
            `;
        } else if (direction === 4) {
            return ` 
                &:before { 
                    right: 4px; 
                } 
                &:after { 
                    top: 4px; 
                    height: 24px; 
                    width: 2px; 
                } 
            `;
        } else if (direction === 5) {
            return ` 
                &:before { 
                    bottom: 4px; 
                    height: 24px; 
                    width: 2px; 
                } 
                &:after { 
                    left: 4px; 
                } 
            `;
        } else {
            return ` 
                &:before { 
                    display: none; 
                } 
                &:after { 
                    display: none; 
                } 
            `;
        }
    }}

    &:hover > * {
        visibility: visible;
    }
`;

export function BusRoute() {
    return (
        <>
            <StyledPath direction={1}>
                <StyledTooltip>에이스 하이테크시티</StyledTooltip>
            </StyledPath>
            <StyledPath direction={2}>
                <StyledTooltip>2</StyledTooltip>
            </StyledPath>
            <StyledPath direction={3}>
                <StyledTooltip>3</StyledTooltip>
            </StyledPath>
            <StyledPath direction={4}>
                <StyledTooltip>4</StyledTooltip>
            </StyledPath>
            <StyledPath direction={5}>
                <StyledTooltip>5</StyledTooltip>
            </StyledPath>
            <StyledPath>
                <StyledTooltip>6</StyledTooltip>
            </StyledPath>
        </>
    );
}
