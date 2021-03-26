// static : 프론트엔드를 위한 것
import { handleMessageNotif } from "./chat";
const socket = io("/");
function sendMessage(message) {
  socket.emit("newMessage", { message });
  console.log(`You: ${message}`);
}

function setNickname(nickname) {
  socket.emit("setNickname", { nickname });
}

socket.on("messageNotif", handleMessageNotif);
