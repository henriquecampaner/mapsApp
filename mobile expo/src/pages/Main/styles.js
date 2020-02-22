import styled from 'styled-components/native';
import MapView, { Callout, Marker } from 'react-native-maps';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Map = styled(MapView)`
  flex: 1;
`;

export const CafeContainer = styled(Callout)`
  width: 260px;
`;

export const CafeWrap = styled.View``;

export const CafeName = styled.Text`
  color: #222;
  text-align: center;
  font-weight: bold;
`;

export const CafePhone = styled.Text`
  text-align: center;
`;

export const MarkMap = styled(Marker)``;
