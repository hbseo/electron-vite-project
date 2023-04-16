import { Flex, Icon } from '@chakra-ui/react';

export interface NavItemProps {
    icon?: React.ElementType;
}

export function NavItem({ icon, children, ...rest }: React.PropsWithChildren<NavItemProps>) {
    return (
        <Flex
            align={'center'}
            px={4}
            py={3}
            pl={4}
            cursor={'pointer'}
            color={'inherit'}
            role="group"
            fontWeight={'semibold'}
            transition={'.15s ease'}
            {...rest}
        >
            {icon && <Icon mx={2} boxSize={4} as={icon}></Icon>}
            {children}
        </Flex>
    );
}
