import React from 'react';
import { Tooltip, Box, BoxProps } from '@chakra-ui/react';

export function OverflownText({ children, ...props }: React.PropsWithChildren<BoxProps>) {
    const ref = React.useRef<HTMLParagraphElement>(null);
    const [isOverflown, setIsOverflown] = React.useState(false);
    React.useEffect(() => {
        const element = ref.current!;
        setIsOverflown(element.scrollWidth > element.clientWidth);
    }, []);

    return (
        <Tooltip label={children} isDisabled={!isOverflown}>
            <Box position="relative" isTruncated ref={ref} {...props}>
                {children}
            </Box>
        </Tooltip>
    );
}
