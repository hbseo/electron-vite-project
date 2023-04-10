import React from 'react';
import { Flex, Box, chakra } from '@chakra-ui/react';
import { OverflownText } from '@/custom/OverflownText';

export function Card({ title }: { title: string }) {
    return (
        <Flex p={10} w={'full'} alignItems={'center'} justifyContent={'center'}>
            <Box minW={'300px'} mx={'auto'} shadow={'lg'} rounded={'lg'} overflow={'hidden'}>
                <Flex alignItems={'center'} px={6} py={3} bg={'gray.900'}>
                    <OverflownText
                        color={'white'}
                        fontWeight={'bold'}
                        fontSize={'lg'}
                        noOfLines={1}
                        textOverflow={'ellipsis'}
                        display={'inline'}
                    >
                        {title}
                    </OverflownText>
                </Flex>

                <Box py={4} px={6}>
                    <chakra.h1
                        fontSize="xl"
                        fontWeight="bold"
                        color="gray.800"
                        _dark={{
                            color: 'white',
                        }}
                    >
                        Patterson johnson
                    </chakra.h1>

                    <chakra.p
                        py={2}
                        color="gray.700"
                        _dark={{
                            color: 'gray.400',
                        }}
                    >
                        Full Stack maker & UI / UX Designer , love hip hop music Author of Building UI.
                    </chakra.p>

                    <Flex
                        alignItems="center"
                        mt={4}
                        color="gray.700"
                        _dark={{
                            color: 'gray.200',
                        }}
                    >
                        <chakra.h1 px={2} fontSize="sm">
                            Choc UI
                        </chakra.h1>
                    </Flex>

                    <Flex
                        alignItems="center"
                        mt={4}
                        color="gray.700"
                        _dark={{
                            color: 'gray.200',
                        }}
                    >
                        <chakra.h1 px={2} fontSize="sm">
                            California
                        </chakra.h1>
                    </Flex>
                    <Flex
                        alignItems="center"
                        mt={4}
                        color="gray.700"
                        _dark={{
                            color: 'gray.200',
                        }}
                    >
                        <chakra.h1 px={2} fontSize="sm">
                            patterson@example.com
                        </chakra.h1>
                    </Flex>
                </Box>
            </Box>
        </Flex>
    );
}
