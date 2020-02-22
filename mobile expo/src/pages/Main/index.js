import React, { useState, useEffect } from 'react';
import {
  requestPermissionsAsync,
  getCurrentPositionAsync,
} from 'expo-location';

import axios from 'axios';

import {
  Container,
  Map,
  MarkMap,
  CafeContainer,
  CafeWrap,
  CafeName,
  CafePhone,
} from './styles';

export default function Main() {
  const [cafes, setCafes] = useState([]);

  const [currentRegion, setCurrentRegion] = useState(0);

  useEffect(() => {
    async function getcafe() {
      const response = await axios.get('http://10.130.4.138:3333/cafes');
      console.log(response.data);
      setCafes(response.data);
    }
    getcafe();
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync();

      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        });

        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04,
        });
      }
    }
    loadInitialPosition();
  }, []);
  function handleRegionChanged(region) {
    setCurrentRegion(region);
  }

  if (!currentRegion) {
    return null;
  }

  return (
    <Container>
      <Map
        onRegionChangeComplete={handleRegionChanged}
        initialRegion={currentRegion}
      >
        {cafes.map(cafe => (
          <MarkMap
            key={Math.random(1, 1000)}
            coordinate={{
              longitude: parseFloat(cafe.Longitude),
              latitude: parseFloat(cafe.Latitude),
            }}
          >
            <CafeContainer>
              <CafeWrap>
                <CafeName>{cafe.Name}</CafeName>
                <CafePhone>{cafe.Phone}</CafePhone>
              </CafeWrap>
            </CafeContainer>
          </MarkMap>
        ))}
      </Map>
    </Container>
  );
}
