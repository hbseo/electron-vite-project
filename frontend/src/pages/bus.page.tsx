import React from 'react';
import { SimpleGrid, Box, useDisclosure, Flex, ScaleFade, List, ListItem, Card } from '@chakra-ui/react';
import { BusCard, BusAdd } from '@/components/Bus';
import { ModalCustom, InputText } from '@/custom';
import { useDebounce } from '@/hooks';
import { getStationByName } from '@/api';
import { BusStation } from '@/interfaces/busStation.interface';

export function BusPage() {
    const defaultBusStation = {
        title: '금천구청',
        arsId: '19004',
    };

    const [busStation, setBusStation] = React.useState([defaultBusStation]);
    const [searchResult, setSearchResult] = React.useState<JSX.Element>(<></>);
    const inputRef = React.useRef<HTMLInputElement>(null);

    const { isOpen: isOpenModal, onOpen: onOpenModal, onClose: onCloseModal } = useDisclosure();
    const { isOpen: isOpenText, onOpen: onOpenText, onClose: onCloseText } = useDisclosure();

    React.useEffect(() => {
        if (inputRef && inputRef.current) {
            inputRef.current.addEventListener('focusout', () => {
                onCloseText();
            });
            inputRef.current.addEventListener('focusin', () => {
                onOpenText();
            });
        }

        return () => {
            if (inputRef && inputRef.current) {
                inputRef.current.removeEventListener('focusout', () => {});
                inputRef.current.removeEventListener('focusin', () => {});
            }
        };
    }, [isOpenText, inputRef]);

    React.useEffect(() => {
        setSearchResult(<></>);
    }, [isOpenModal]);

    const handleModalOpen = React.useCallback(() => {
        onOpenModal();
        setTimeout(() => {
            if (inputRef.current) {
                inputRef.current.focus();
            }
        }, 0);
    }, []);

    const handleInputChange = React.useCallback(
        useDebounce((value) => {
            if (value.length === 0) {
                onCloseText();
            } else {
                getStationByName(value).then((response) => {
                    if (Number(response.data.msgHeader.headerCd) !== 0) {
                        setSearchResult(
                            <Box px={2} py={1}>
                                검색 결과가 없습니다.
                            </Box>,
                        );
                    } else {
                        setSearchResult(
                            <List>
                                {response.data.msgBody.itemList.map((item: BusStation) => {
                                    if (Number(item.arsId) === 0) return;
                                    return (
                                        <ListItem
                                            key={item.stId}
                                            my={1}
                                            px={2}
                                            py={1}
                                            rounded={4}
                                            _hover={{ bg: '#edf2f7', cursor: 'pointer' }}
                                            onClick={() => console.log('a')}
                                        >
                                            {item.stNm}
                                        </ListItem>
                                    );
                                })}
                            </List>,
                        );
                    }
                    onOpenText();
                });
            }
        }, 300),
        [],
    );

    return (
        <Box>
            <SimpleGrid minChildWidth={'350px'} spacing={2}>
                {busStation.map((station) => (
                    <BusCard key={station.arsId} title={station.title} arsId={station.arsId} />
                ))}
                <BusAdd onClick={handleModalOpen} />
                <ModalCustom
                    title={'Modal Title'}
                    onClose={onCloseModal}
                    isOpen={isOpenModal}
                    handleModalConfirm={onCloseModal}
                    modalContentProps={{ w: '500px' }}
                >
                    <Box>
                        <Flex direction={'column'}>
                            <InputText
                                size={'sm'}
                                placeholder={'정류소 명'}
                                action={handleInputChange}
                                ref={inputRef}
                            />
                            <ScaleFade initialScale={0.9} in={isOpenText} unmountOnExit={true}>
                                <Card
                                    pos={'absolute'}
                                    rounded={4}
                                    bg={'rgba(255,255,255, 0.9)'}
                                    w={'400px'}
                                    maxH={'200px'}
                                    overflowY={'auto'}
                                    mt={2}
                                    zIndex={1}
                                >
                                    {searchResult}
                                </Card>
                            </ScaleFade>
                        </Flex>
                        <Box mt={2} h={'200px'} bg={'gray.600'} rounded={4} />
                    </Box>
                </ModalCustom>
            </SimpleGrid>
        </Box>
    );
}
