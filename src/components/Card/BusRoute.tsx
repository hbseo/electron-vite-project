import React from 'react';
import styled from '@emotion/styled';

const StyledTooltip = styled.div`
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
// ─ │ ┌ ┐ ┘ └ .
const StyledPath = styled.div<{ direction?: number }>`
    position: relative;
    width: 6px;
    height: 6px;
    display: inline-block;
    border-style: solid;
    border-radius: 50%;
    border-width: 2px;
    border-color: rgb(135, 199, 0);
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
                    top: 2px;
                    right: 6px;
                }
                &:after {
                    top: 2px;
                    left: 6px;
                }
            `;
        } else if (direction === 2) {
            return `
                &:before {
                    top: 6px;
                    left: 2px;
                    height: 24px;
                    width: 2px;
                }
                &:after {
                    bottom: 6px;
                    left: 2px;
                    height: 24px;
                    width: 2px;
                }
            `;
        } else if (direction === 3) {
            return `
                &:before {
                    top: 6px;
                    left: 2px;
                    height: 24px;
                    width: 2px;
                }
                &:after {
                    top: 2px;
                    left: 6px;
                }
            `;
        } else if (direction === 4) {
            return `
                &:before {
                    top: 2px;
                    right: 6px;
                }
                &:after {
                    top: 6px;
                    left: 2px;
                    height: 24px;
                    width: 2px;
                }
            `;
        } else if (direction === 5) {
            return `
                &:before {
                    bottom: 6px;
                    left: 2px;
                    height: 24px;
                    width: 2px;
                }
                &:after {
                    top: 2px;
                    left: 6px;
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

    &:hover {
        ${StyledTooltip} {
            visibility: visible;
        }
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
