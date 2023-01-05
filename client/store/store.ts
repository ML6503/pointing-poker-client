import { createContext } from 'react';
import { io, Socket } from 'socket.io-client';
import { BASE_URL } from 'utils/apiConfig';

const socketIo = io(BASE_URL, {
  withCredentials: true,
  auth: {
    userId: '',
  },
  extraHeaders: {
    'my-custom-header': 'abcd',
    "Access-Control-Allow-Origin": '*',
    "Access-Control-Allow-Headers": "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
    "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT" 
  },
});

socketIo.on('connect', () => {});
socketIo.disconnect().connect();

export interface AppStore {
  socket: Socket;
  userId: string;
  username: string;
  userSurname: string;
  avatar: string;
  roomId: string;
  roomName: string;
  userRole: string;
  dealer: boolean;
}

export const appStore = {
  socket: socketIo,
  userId: '',
  username: '',
  userSurname: '',
  avatar: '',
  roomId: '',
  roomName: '',
  userRole: 'member',
  dealer: false,
};

const AppContext = createContext(null);

export default AppContext;
