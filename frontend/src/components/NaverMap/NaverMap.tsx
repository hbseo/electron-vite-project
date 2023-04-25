import React from 'react';
import BusIcon from '@/assets/images/bus-24.png';
import { chakra } from '@chakra-ui/react';
const { VITE_NAVER_MAP_CLIENT_ID } = import.meta.env;

interface BusData {
    ARS_ID: number;
    NODE_ID: number;
    STATION_NAME: string;
    Lat: number;
    Lng: number;
}

export function NaverMap() {
    const mapElement = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        fetch('data/busData.json', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                const script = document.createElement('script');
                script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${VITE_NAVER_MAP_CLIENT_ID}`;
                script.async = true;
                document.body.appendChild(script);

                script.addEventListener('load', () => {
                    const { naver } = window;
                    if (!mapElement.current || !naver) return;

                    const location = new naver.maps.LatLng(37.5697651251, 126.9877498816);
                    const mapOptions: naver.maps.MapOptions = {
                        center: location,
                        zoom: 15,
                        zoomControl: true,
                        zoomControlOptions: {
                            position: naver.maps.Position.TOP_RIGHT,
                        },
                    };
                    const map = new naver.maps.Map(mapElement.current, mapOptions);
                });
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    const mapStype = {
        width: '100%',
        height: '600px',
    };

    return <chakra.div ref={mapElement} style={mapStype}></chakra.div>;
}
