const { Client, GatewayIntentBits, Events } = require("discord.js");
let client = new Client();
client.once("ready", () => {
  console.log("is Logged ");
});
client.on("message", async (msg) => {
  if (!msg.author.bot) {
    msg.reply("Bạn nói là: " + msg.content);
  }
});
client.login(
  "MTE1MTU1NTI1NDk1ODE3NDM5OA.Gq-fs4.KL34AwwttB-WpFfNWc-QJl3KKwQSKZd7WrfCy0"
);
