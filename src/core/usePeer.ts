import { useContext, useEffect } from 'react';
import { PeerContextValues } from './types';
import { __PeerContext } from './PeerProvider';

export function usePeer() {
  const context = useContext<PeerContextValues>(__PeerContext);
  useEffect(() => {
    if (!Object.keys(context).length) console.warn(NOT_IN_CONTEXT_WARNING);
  }, [context]);
  return context;
}

export const NOT_IN_CONTEXT_WARNING =
  'No Peerjs context. Did you forget to wrap your app in a <PeerProvider />?';
