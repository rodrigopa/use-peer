import React from 'react';
import { PeerProviderProps } from '../core/types';
import { CorePeerProvider } from '../core/PeerProvider';
//
export const PeerProvider: React.FC<PeerProviderProps> = (props) => {
  return <CorePeerProvider mediaDevices={navigator.mediaDevices} {...props} />;
};
