import { css } from '@emotion/react';
import { chakra } from '@chakra-ui/react';

const tooltipStyles = () => {
    return css`
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
};

// ─ │ ┌ ┐ ┘ └ .
const pathStyles = (direction?: number, color?: string) => {
    return css`
        position: relative;
        width: 6px;
        height: 6px;
        display: inline-block;
        border-style: solid;
        border-radius: 50%;
        border-width: 2px;
        border-color: ${color || 'rgb(135, 199, 0)'};
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

        ${direction === 1 &&
        `
            &:before {
                right: 4px;
            }
            &:after {
                left: 4px;
            }
        `}
        ${direction === 2 &&
        `
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
        `}
        ${direction === 3 &&
        `
            &:before {
                top: 4px;
                height: 24px;
                width: 2px;
            }
            &:after {
                left: 4px;
            }
        `}
        ${direction === 4 &&
        `
            &:before {
                right: 4px;
            }
            &:after {
                top: 4px;
                height: 24px;
                width: 2px;
            }
        `}
        ${direction === 5 &&
        `
            &:before {
                right: 4px;
            }
            &:after {
                bottom: 4px;
                height: 24px;
                width: 2px;
            }
        `}
        ${direction === 6 &&
        `
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
        `}
        ${!direction &&
        `
            &:before {
                display: none;
            }
            &:after {
                display: none;
            }
        `}
        
        &:hover > * {
            visibility: visible;
        }
    `;
};

export function BusRoute() {
    return (
        <>
            <chakra.div css={pathStyles(1)}>
                <chakra.div css={tooltipStyles}>에이스 하이테크시티</chakra.div>
            </chakra.div>
            <chakra.div css={pathStyles(2)}>
                <chakra.div css={tooltipStyles}>2</chakra.div>
            </chakra.div>
            <chakra.div css={pathStyles(3)}>
                <chakra.div css={tooltipStyles}>3</chakra.div>
            </chakra.div>
            <chakra.div css={pathStyles(4)}>
                <chakra.div css={tooltipStyles}>4</chakra.div>
            </chakra.div>
            <chakra.div css={pathStyles(5)}>
                <chakra.div css={tooltipStyles}>5</chakra.div>
            </chakra.div>
            <chakra.div css={pathStyles()}>
                <chakra.div css={tooltipStyles}>6</chakra.div>
            </chakra.div>
        </>
    );
}
