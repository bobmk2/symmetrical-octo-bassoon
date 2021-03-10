import { useCallback, useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useSocketIO = (address: string, handlers: { eventName: string; func: (message: any) => void }[] = []) => {
  const [socket, setSocket] = useState<undefined | Socket>(undefined);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    const socket = io(address);
    setSocket(socket);

    handlers.forEach((handler) => {
      socket.on(handler.eventName, handler.func);
    });

    socket.on('connect', () => {
      setConnected(true);
    });

    socket.on('disconnect', () => {
      setConnected(false);
    });

    return () => {
      socket.disconnect();
      setSocket(undefined);
      setConnected(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const emit = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async (eventName: string, args: any) => {
      if (socket != null && socket.connected) {
        return new Promise((resolve) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          socket.emit(eventName, args, (data: any) => {
            resolve(data);
          });
        });
      }
    },
    [socket]
  );

  return { connected, emit };
};
