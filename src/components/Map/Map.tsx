import React from 'react';
const { VITE_NAVER_MAP_CLIENT_ID } = import.meta.env;

export function Map() {
    const mapElement = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const script = document.createElement('script');
        script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${VITE_NAVER_MAP_CLIENT_ID}`;
        script.async = true;
        document.body.appendChild(script);

        script.addEventListener('load', () => {
            const { naver } = window;
            if (!mapElement.current || !naver) return;

            const location = new naver.maps.LatLng(37.3595704, 127.105399);
            const mapOptions: naver.maps.MapOptions = {
                center: location,
                zoom: 10,
                zoomControl: true,
                zoomControlOptions: {
                    position: naver.maps.Position.TOP_RIGHT,
                },
            };
            const map = new naver.maps.Map(mapElement.current, mapOptions);
            new naver.maps.Marker({
                position: location,
                map,
            });
        });
    }, []);

    const mapStype = {
        width: '100%',
        height: '600px',
    };

    return <div ref={mapElement} style={mapStype}></div>;
}
