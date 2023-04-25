import React from 'react';
import { SimpleGrid, Box, useDisclosure, Flex, ScaleFade, List, ListItem } from '@chakra-ui/react';
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
    const ref = React.useRef<HTMLInputElement>(null);

    const { isOpen: isOpenModal, onOpen: onOpenModal, onClose: onCloseModal } = useDisclosure();
    const { isOpen: isOpenText, onOpen: onOpenText, onClose: onCloseText } = useDisclosure();

    React.useEffect(() => {}, []);

    const handleModalOpen = React.useCallback(() => {
        onOpenModal();
        setTimeout(() => {
            if (ref.current) {
                ref.current.focus();
            }
        }, 0);
    }, []);

    const handleInputChange = React.useCallback(
        useDebounce((value) => {
            if (value.length === 0) {
                onCloseText();
            } else {
                getStationByName(value).then((response) => {
                    console.log(response);
                    if (Number(response.data.msgHeader.headerCd) !== 0) {
                        setSearchResult(<Box>검색 결과가 없습니다.</Box>);
                    } else {
                        setSearchResult(
                            <List>
                                {response.data.msgBody.itemList.map((item: BusStation) => {
                                    if (Number(item.arsId) === 0) return;
                                    return <ListItem key={item.stId}>{item.stNm}</ListItem>;
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
                >
                    <Flex>
                        <Flex direction={'column'} mr={2}>
                            <InputText size={'sm'} placeholder={'정류소 명'} action={handleInputChange} ref={ref} />
                            <ScaleFade initialScale={0.9} in={isOpenText}>
                                <Box pos={'absolute'} rounded={4} bg={'rgba(255,255,255,0.7)'}>
                                    {searchResult}
                                </Box>
                            </ScaleFade>
                        </Flex>
                        <Box w={'300px'} h={'200px'} bg={'gray.600'} rounded={4} />
                    </Flex>
                </ModalCustom>
            </SimpleGrid>
        </Box>
    );
}
