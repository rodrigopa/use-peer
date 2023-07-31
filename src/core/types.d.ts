import { DataConnection, MediaConnection, Peer, PeerJSOption } from 'peerjs';
import { PropsWithChildren } from 'react';
import { mediaDevices } from 'react-native-webrtc';

export type PeerContextValues = {
  peer?: Peer;
  mediaDevices?: typeof navigator.mediaDevices | typeof mediaDevices;
};

export type PeerProviderProps = PropsWithChildren<{
  mediaDevices?: typeof navigator.mediaDevices | typeof mediaDevices;
  id?: string;
  options?: PeerJSOption;
  value?: PeerContextValues;
}>;

export type PeerEvents = {
  /**
   * Emitted when a connection to the PeerServer is established.
   */
  open: (id: string) => void;
  /**
   * Emitted when a new data connection is established from a remote peer.
   */
  connection: (dataConnection: DataConnection) => void;
  /**
   * Emitted when a remote peer attempts to call you.
   */
  call: (mediaConnection: MediaConnection) => void;
  /**
   * Emitted when the peer is destroyed and can no longer accept or create any new connections.
   */
  close: () => void;
  /**
   * Emitted when the peer is disconnected from the signalling server
   */
  disconnected: (currentId: string) => void;
  /**
   * Errors on the peer are almost always fatal and will destroy the peer.
   */
  error: (error: Error) => void;
};

export type DataConnectionEvents = {
  /**
   * Emitted when data is received from the remote peer.
   */
  data: (data: unknown) => void;
  /**
   * Emitted when the connection is established and ready-to-use.
   */
  open: () => void;
};

export type MediaConnectionEvents = {
  /**
   * Emitted when a connection to the PeerServer is established.
   */
  stream: (stream: MediaStream) => void;
};
