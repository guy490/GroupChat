import openSocket from "socket.io-client";

const socket = openSocket("wss://chatsocket490.herokuapp.com");
// const socket = openSocket("http://192.168.1.6:8000");

export { socket };
