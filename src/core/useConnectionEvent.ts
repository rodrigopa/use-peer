import { useEffect } from 'react';
import { DataConnection } from 'peerjs';
import { DataConnectionEvents } from './types';

export function useConnectionEvent<T extends keyof DataConnectionEvents>(
  conn: DataConnection,
  eventName: T,
  callback: DataConnectionEvents[T] extends (...args: infer A) => void
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
