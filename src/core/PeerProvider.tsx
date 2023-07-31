import React, { useEffect, useState } from 'react';
import { Peer } from 'peerjs';
import { PeerContextValues, PeerProviderProps } from './types';

const PeerContext = React.createContext<PeerContextValues>({});
export const __PeerContext = PeerContext;

export const CorePeerProvider: React.FC<PeerProviderProps> = ({
  children,
  id,
  options,
  ...props
}) => {
  const [peer, setPeer] = useState<Peer>();

  useEffect(() => {
    if (id && options) {
      setPeer(new Peer(id, options));
    } else if (options) {
      setPeer(new Peer(options));
    } else if (id) {
      setPeer(new Peer(id));
    } else {
      setPeer(new Peer());
    }
  }, [id, options]);

  return <PeerContext.Provider value={{ peer: peer! }}>{children}</PeerContext.Provider>;
};
