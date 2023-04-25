import styled from '@emotion/styled';
import { BiBus } from 'react-icons/bi';

const StyledBus = styled(BiBus)<{ color?: string; size?: number; pos: { top: number; left: number } }>`
    position: absolute;
    top: ${({ pos }) => pos.top}px;
    left: ${({ pos }) => pos.left}px;
    color: ${({ color }) => color || 'black'};
    size: ${({ size }) => size || 20}px;
    z-index: 9;
`;

export function BusIcon({ size, color, pos }: { size?: number; color?: string; pos: { top: number; left: number } }) {
    return <StyledBus size={size} color={color} pos={pos}></StyledBus>;
}
