import React from 'react';
import { PeerProviderProps } from '../core/types';
import { CorePeerProvider } from '../core/PeerProvider';
import { mediaDevices } from 'react-native-webrtc';

export const PeerProvider: React.FC<PeerProviderProps> = (props) => {
  return <CorePeerProvider mediaDevices={mediaDevices} {...props} />;
};
