import { Box, Card, CardBody, Center, Flex, Text } from '@chakra-ui/react';
import { OverflownText } from '@/custom/OverflownText';

export function Info() {
    return (
        <Card>
            <CardBody padding={'10px'}>
                <Flex>
                    <Box width={'25%'} textAlign={'left'}>
                        <Text fontSize={'2xs'}>버스 번호</Text>
                        <Text fontSize={'sm'}>5714번</Text>
                    </Box>
                    <Box width={'50%'}>
                        <Center fontSize={'2xs'}>현재 위치</Center>
                        <Center>
                            <OverflownText noOfLines={1} fontSize={'sm'}>
                                대구의료원라파엘웰빙센터건너
                            </OverflownText>
                        </Center>
                    </Box>
                    <Box width={'25%'} textAlign={'right'}>
                        <Text fontSize={'2xs'}>남은 시간</Text>
                        <Text fontSize={'sm'}>12분</Text>
                    </Box>
                </Flex>
            </CardBody>
        </Card>
    );
}
