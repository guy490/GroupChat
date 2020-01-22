import openSocket from "socket.io-client";

// const socket = openSocket("wss://chatsocket490.herokuapp.com");
// const socket = openSocket("http://192.168.1.3:8000");
const socket = openSocket("http://localhost:8000");
export { socket };
