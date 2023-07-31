import React, { useEffect, useState } from 'react';
import { useConnectionEvent } from '../../src/core/useConnectionEvent';
import { usePeer } from '../../src/core/usePeer';
import { useEvent } from '../../src/core/useEvent';
import { useMediaEvent } from '../../src/core/useMediaEvent';
import { MediaConnection } from 'peerjs';

export const App = () => {
  const { peer } = usePeer();
  const connection = peer!.connect('opaamigo');
  const [callConnection, setCallConnection] = useState<MediaConnection | undefined>();

  useEvent(peer, 'call', async (conn) => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      conn.answer(stream);
    } catch {
      console.error('Failed to get local stream');
    }
  });

  useConnectionEvent(connection, 'data', (data) => {
    console.log(data);
    // connection.send
  });

  useMediaEvent(callConnection, 'stream', (stream) => {
    console.log(stream);
  });

  useEffect(() => {
    (async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        setCallConnection(peer!.call('another-peers-id', stream));
      } catch {
        console.error('Failed to get local stream');
      }
    })();
  });
};
