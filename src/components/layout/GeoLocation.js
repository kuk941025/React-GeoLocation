import React, { useEffect, useRef } from 'react'
import { geolocated } from 'react-geolocated'


const GeoLocation = ({ isGeolocationAvailable, isGeolocationEnabled, positionError, coords, setCoords }) => {
    const is_cordinated = useRef(false);

    useEffect(() => {
        if (!is_cordinated.current && coords) {
            setCoords(coords);
            is_cordinated.current = true;
        }

    })

    return (
        <div>
            {!isGeolocationAvailable ? (
                <p>위치정보를 지원하지 않는 브라우저입니다.</p>
            ) : (
                    !isGeolocationEnabled ? (
                        <p>권한없음</p>
                    ) : (
                            coords ? (
                                <React.Fragment>
                                    <p>Latitude: {coords.latitude}</p>
                                    <p>Longitude: {coords.longitude}</p>
                                </React.Fragment>
                            ) : (
                                    <React.Fragment>
                                        <div>
                                            위치 정보를 켜주세요.
                                            {isGeolocationAvailable ? ("권한잇음") : "권한없음"}
                                        </div>
                                        {positionError && <p>{positionError}</p>}
                                    </React.Fragment>

                                )

                        )
                )}
        </div>
    )
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000
})(GeoLocation)