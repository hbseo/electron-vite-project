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
    const [searchResult, setSearchResult] = React.useState<BusStation[]>([]);
    const [selectedBusStationId, setSelectedBusStationId] = React.useState<string>('');
    const [newStation, setNewStation] = React.useState<BusStation | null>(null);

    const inputRef = React.useRef<HTMLInputElement>(null);
    const modalRef = React.useRef<HTMLInputElement>(null);
    const mapElement = React.useRef<HTMLDivElement>(null);

    const { isOpen: isOpenModal, onOpen: onOpenModal, onClose: onCloseModal } = useDisclosure();
    const { isOpen: isOpenText, onOpen: onOpenText, onClose: onCloseText } = useDisclosure();

    React.useEffect(() => {
        if (inputRef && inputRef.current) {
            inputRef.current.addEventListener('focusin', () => {
                onOpenText();
                if (selectedBusStationId !== '') {
                    document.getElementById(selectedBusStationId)?.scrollIntoView({ behavior: 'smooth' });
                }
            });
        }
        if (modalRef && modalRef.current) {
            modalRef.current.addEventListener('click', (e: any) => {
                if (e.target?.nodeName?.toLowerCase() !== 'input') {
                    onCloseText();
                }
            });
        }

        return () => {
            if (inputRef && inputRef.current) {
                inputRef.current.removeEventListener('focusin', () => {});
            }
            if (modalRef && modalRef.current) {
                modalRef.current.removeEventListener('click', () => {});
            }
        };
    }, [isOpenModal, isOpenText, selectedBusStationId]);

    React.useEffect(() => {
        setSearchResult([]);
    }, [isOpenModal]);

    React.useEffect(() => {}, [newStation]);

    const handleModalOpen = React.useCallback(() => {
        onOpenModal();
        setTimeout(() => {
            if (inputRef.current) {
                inputRef.current.focus();
            }
        }, 0);
    }, []);

    const handleItemClick = React.useCallback(
        (e: React.MouseEvent<HTMLElement>) => {
            if (!(e.target instanceof HTMLElement)) return;
            const stationId = e.target.id;
            setSelectedBusStationId(stationId);

            const station = searchResult.find((station) => station.stId === stationId);

            const { naver } = window;

            if (!mapElement.current || !naver) return;
            const location = new naver.maps.LatLng(Number(station?.tmY), Number(station?.tmX));
            const mapOptions: naver.maps.MapOptions = {
                center: location,
                zoom: 15,
                zoomControl: false,
            };
            const map = new naver.maps.Map(mapElement.current, mapOptions);
        },
        [searchResult],
    );

    const handleInputChange = React.useCallback(
        useDebounce((value) => {
            if (value.length === 0) {
                setSearchResult([]);
                onCloseText();
            } else {
                getStationByName(value).then((response) => {
                    if (Number(response.data.msgHeader.headerCd) !== 0) {
                        setSearchResult([]);
                    } else {
                        setSearchResult(response.data.msgBody.itemList);
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
                    ref={modalRef}
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
                                    <List>
                                        {searchResult.length > 0 ? (
                                            searchResult.map((item: BusStation) => (
                                                <ListItem
                                                    key={item.stId}
                                                    id={item.stId}
                                                    my={1}
                                                    px={2}
                                                    py={1}
                                                    rounded={4}
                                                    bg={selectedBusStationId === item.stId ? '#cbd5e0' : ''}
                                                    _hover={{ bg: '#cbd5e0', cursor: 'pointer' }}
                                                    onClick={handleItemClick}
                                                >
                                                    {item.stNm}
                                                </ListItem>
                                            ))
                                        ) : (
                                            <Box px={2} py={1}>
                                                검색 결과가 없습니다.
                                            </Box>
                                        )}
                                    </List>
                                </Card>
                            </ScaleFade>
                        </Flex>
                        <Box ref={mapElement} mt={2} h={'200px'} bg={'gray.600'} rounded={4} />
                    </Box>
                </ModalCustom>
            </SimpleGrid>
        </Box>
    );
}
