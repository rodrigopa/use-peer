import { useEffect } from 'react';
import { Peer } from 'peerjs';
import { PeerEvents } from './types';

export function useEvent<T extends keyof PeerEvents>(
  peer: Peer | undefined,
  eventName: T,
  callback: PeerEvents[T] extends (...args: infer A) => void ? (...args: A) => void : never,
) {
  useEffect(() => {
    if (peer === undefined) {
      return;
    } else peer.on(eventName, callback);
    return () => {
      peer.off(eventName, callback);
    };
  }, [peer, eventName, callback]);
}
