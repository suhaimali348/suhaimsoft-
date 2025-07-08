const ably = new Ably.Realtime("X5Tp-g.KazqMw:4P1Auzf48H0HEPaLBDDpjU4IBTtGMgSOdGMOIDkwFzE");
const channel = ably.channels.get("get-started");

channel.subscribe("first", message => {
  console.log("Real-time message:", message.data);
  const msgBox = document.getElementById("msgBox");
  if (msgBox) {
    msgBox.textContent += message.data + "\n";
  }
});
