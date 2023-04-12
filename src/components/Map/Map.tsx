import React from 'react';
import BusIcon from '@/assets/images/bus-24.png';
const { VITE_NAVER_MAP_CLIENT_ID } = import.meta.env;

interface BusData {
    ARS_ID: number;
    NODE_ID: number;
    STATION_NAME: string;
    Lat: number;
    Lng: number;
}

export function Map() {
    const mapElement = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const busDataUrl = 'data/testData.json';
        fetch(busDataUrl, {
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

                    let markers: naver.maps.Marker[] = [];

                    data.forEach((station: BusData) => {
                        let location = new naver.maps.LatLng(station['Lat'], station['Lng']);

                        let marker = new naver.maps.Marker({
                            position: location,
                            map,
                            icon: {
                                url: BusIcon,
                                size: new naver.maps.Size(12, 12),
                                scaledSize: new naver.maps.Size(12, 12),
                            },
                        });
                        markers.push(marker);
                    });

                    naver.maps.Event.addListener(map, 'zoom_changed', function () {
                        updateMarkers(markers);
                    });
                    naver.maps.Event.addListener(map, 'dragend', function () {
                        updateMarkers(markers);
                    });

                    function updateMarkers(markers: naver.maps.Marker[]) {
                        let bounds = map.getBounds();
                        let marker, position;
                        for (let i = 0, ii = markers.length; i < ii; i++) {
                            marker = markers[i];
                            position = marker.getPosition();
                            if (bounds.hasLatLng(position) && map.getZoom() >= 17) {
                                showMarker(marker);
                            } else {
                                hideMarker(marker);
                            }
                        }
                    }
                    function showMarker(marker: naver.maps.Marker) {
                        if (marker.setMap()) return;
                        marker.setMap(map);
                    }
                    function hideMarker(marker: naver.maps.Marker) {
                        if (!marker.setMap()) return;
                        marker.setMap(null);
                    }
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

    return <div ref={mapElement} style={mapStype}></div>;
}
