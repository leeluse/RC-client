import {io} from "socket.io-client";
const socket = io("http://localost:5001");

export default socket;

