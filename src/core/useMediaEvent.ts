import { useEffect } from 'react';
import { MediaConnection } from 'peerjs';
import { MediaConnectionEvents } from './types';

export function useMediaEvent<T extends keyof MediaConnectionEvents>(
  conn: MediaConnection | undefined,
  eventName: T,
  callback: MediaConnectionEvents[T] extends (...args: infer A) => void
    ? (...args: A) => void
    : never,
) {
  useEffect(() => {
    if (conn === undefined) {
      return;
    } else conn.on(eventName, callback);
    return () => {
      conn.off(eventName, callback);
    };
  }, [conn, eventName, callback]);
}
