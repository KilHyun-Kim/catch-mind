// static : 프론트엔드를 위한 것

const socket = io("/");

socket.on("hello", () => console.log("Somebody said Hello"));
