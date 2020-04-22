import openSocket from "socket.io-client";

const socket = openSocket(process.env.REACT_APP_LOCALHOST_WEBSOCKET);
export { socket };
